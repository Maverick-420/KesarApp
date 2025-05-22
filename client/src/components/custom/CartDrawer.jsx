import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./CartProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "@/redux/slices/cartSlice";

const CartDrawer = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    setOpen(false);
    navigate("/checkout");
  };

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="relative">
        {totalQuantity > 0 && (
          <Badge className="absolute px-1 py-0">{totalQuantity}</Badge>
        )}
        <ShoppingCart
          className="text-gray-800 dark:text-white hover:scale-105 transition-all ease-in-out cursor-pointer"
          strokeWidth={1.3}
          size={28}
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your Cart</DrawerTitle>
          <DrawerDescription>
            Total Items: {totalQuantity}, Total Price: ₹{totalPrice}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col sm:flex-row justify-start gap-3 h-[70vh] overflow-y-auto sm:overflow-y-hidden sm:h-auto mx-3">
          {cartItems.length === 0 ? (
            <h2 className="text-primary text-sm">
              Nothing To Show, Please add some products...
            </h2>
          ) : (
            cartItems.map((item) => <CartProduct key={item._id} {...item} />)
          )}
        </div>

        <DrawerFooter className="flex flex-col gap-2">
          <Button onClick={handleCheckout} disabled={cartItems.length === 0}>
            Checkout
          </Button>
          <Button
            onClick={handleClearCart}
            variant="destructive"
            disabled={cartItems.length === 0}
          >
            Clear Cart
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
