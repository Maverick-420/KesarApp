import { Colors } from "@/constants/colors";
import { useToast } from "@/hooks/use-toast";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const CartProduct = ({ name, price, _id, image, quantity, stock }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(removeFromCart({ _id, quantity: 1, price }));
    } else {
      toast({ title: "Quantity can't be less than 1" });
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      dispatch(addToCart({ _id, quantity: 1, price }));
    } else {
      toast({ title: "Quantity Exceeded Available Stock" });
    }
  };

  return (
    <div className="border w-fit rounded-2xl overflow-clip grid z-1 relative hover:shadow-md">
      <img
        src={image}
        alt={name}
        className="w-[30rem] sm:w-[20rem] h-[20rem] object-cover rounded-t-2xl"
      />
      <div className="px-3 grid gap-1 py-2 absolute bg-white dark:bg-zinc-900 w-full bottom-0 rounded-xl">
        <h2 className="text-md">{name}</h2>
        <span className="font-semibold text-md">₹{price}</span>

        <div className="flex justify-between my-2">
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-5 bg-gray-100 rounded-lg px-3 py-2 w-fit">
              <Minus
                size={15}
                stroke={Colors.customGray}
                onClick={handleDecrease}
                className="cursor-pointer"
              />
              <span className="text-slate-950 text-sm sm:text-md">
                {quantity}
              </span>
              <Plus
                size={15}
                stroke={Colors.customGray}
                onClick={handleIncrease}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
