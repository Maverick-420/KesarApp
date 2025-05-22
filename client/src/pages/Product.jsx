import ReviewsComponent from "@/components/custom/ReviewsComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Colors } from "@/constants/colors";
import { starsGenerator } from "@/constants/helper";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/redux/slices/cartSlice";
import axios from "axios";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProductByName = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL +
            `/get-product-by-name/${productName?.split("-").join(" ")}`
        );
        const { data } = await res.data;
        console.log(data);
        setProduct(data);
      } catch (error) {}
    };

    fetchProductByName();
  }, [productName]);

  const checkAvailability = async () => {
    if (pincode.trim() === "") {
      setAvailabilityMessage("Please enter a valid pincode");
      return;
    }

    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/get-pincode/${pincode}`
      );
      const data = res.data;
      setAvailabilityMessage(data.message);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      setAvailabilityMessage(errorMessage);
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (!product.stock || productQuantity > product.stock) {
      toast({ title: "Product out of stock or quantity exceeds availability" });
      return;
    }

    if (product.blacklisted) {
      toast({ title: "Product isn't available for purchase" });
      return;
    }

    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: productQuantity,
        image: product.images[0]?.url,
        stock: product.stock,
        blacklisted: product.blacklisted,
      })
    );

    setProductQuantity(1);
    toast({
      title: "Product added to cart",
    });
  };

const handleBuyNow = () => {
  if (!isAuthenticated) {
    navigate("/login");
    return;
  }

  if (!product.stock || productQuantity > product.stock) {
    toast({ title: "Product out of stock or quantity exceeds availability" });
    return;
  }

  if (product.blacklisted) {
    toast({ title: "Product isn't available for purchase" });
    return;
  }

  // First, add the product to the cart
  dispatch(
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: productQuantity,
      image: product.images[0]?.url,
      stock: product.stock,
      blacklisted: product.blacklisted,
    })
  );

  // Then redirect to checkout
  navigate("/checkout");
};

  return (
    <>
      <div>
        <main className="w-[93vw] lg:w-[70vw] flex flex-col sm:flex-row justify-start items-start gap-10 mx-auto my-10">
          <div className="grid sm:w-[50%] gap-3">
            <img
              src={product?.images?.[selectedImage]?.url}
              className="w-full lg:h-[30rem] rounded-xl object-center object-cover border dark:border-none"
            />
            <div className="grid grid-cols-4 gap-3">
              {product?.images?.map(({ url, id }, index) => (
                <img
                  src={url}
                  key={id}
                  onClick={() => setSelectedImage(index)}
                  className="rounded-xl filter hover:brightness-50 cursor-pointer transition-all ease-in-out duration-300 border dark:border-none"
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="sm:w-[50%] lg:w-[30%]">
            <div className="pb-5">
              <h2 className="font-extrabold text-2xl">{product?.name}</h2>
              <p className="text-sm my-2">{product?.description}</p>
              <div className="flex items-center">
                {starsGenerator(product.rating, "0", 15)}
                <span className="text-md ml-1">
                  ({product?.reviews?.length})
                </span>
              </div>
            </div>

            <div className="py-5 border-t border-b">
              <h3 className="font-bold text-xl">Rs.{product.price}</h3>
            </div>
            <div className="py-5">
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-5 bg-gray-100 rounded-full px-3 py-2 w-fit">
                  <Minus
                    stroke={Colors.customGray}
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((qty) => (qty > 1 ? qty - 1 : 1))
                    }
                  />
                  <span className="text-slate-950">{productQuantity}</span>
                  <Plus
                    stroke={Colors.customGray}
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((qty) =>
                        typeof product.stock === "number" && qty < product.stock
                          ? qty + 1
                          : qty
                      )
                    }
                  />
                </div>
                {typeof product.stock === "number" &&
                  product.stock > 0 &&
                  product.stock - productQuantity < 10 && (
                    <div className="grid text-sm font-semibold text-gray-600">
                      <span>
                        Only{" "}
                        <span className="text-customYellow">
                          {product.stock - productQuantity} item
                          {product.stock - productQuantity === 1
                            ? ""
                            : "s"}{" "}
                        </span>
                        left!
                      </span>
                      <span>Don't miss it</span>
                    </div>
                  )}
              </div>

              <div className="grid gap-3 my-5">
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter Your Pincode Here"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  <Button onClick={checkAvailability}>
                    Check Availability{" "}
                  </Button>
                </div>
                <p className="text-sm px-2">{availabilityMessage}</p>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBuyNow}>Buy Now</Button>
                <Button variant="outline" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </main>
        <ReviewsComponent productId={product?._id} />
      </div>
    </>
  );
};

export default Product;
