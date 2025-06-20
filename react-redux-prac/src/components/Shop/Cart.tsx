import { useAppSelector } from "../../redux/hooks";
import type { CartItem } from "../../types/cart";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from "../../redux/cart/cartSlice";
import { IoMdCloseCircle } from "react-icons/io";

function QuantityControl({
  value,
  onIncrease,
  onDecrease,
}: {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="flex items-center gap-2 bg-white/70 rounded-md">
      <button
        onClick={onDecrease}
        className="w-5 h-6 pb-1 bg-rose-700/70 rounded-l-md flex justify-center items-center hover:cursor-pointer">
        -
      </button>
      <span className="text-gray-700 w-4 flex justify-center items-center">
        {value}
      </span>
      <button
        onClick={onIncrease}
        className="w-5 h-6 pb-1 bg-rose-700/70 rounded-r-md flex justify-center items-center hover:cursor-pointer ">
        +
      </button>
    </div>
  );
}

function CartItem({ item }: { item: CartItem }) {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseItemQuantity(item.product.id));
  const handleDecrease = () => dispatch(decreaseItemQuantity(item.product.id));
  const handleRemove = () => {
    dispatch(removeItem(item.product.id));
  };

  return (
    <div className="w-[300px] flex justify-between bg-gray-50/50 py-1 px-2 rounded-sm">
      <span className="bg-gray-100 w-[130px] flex justify-center rounded-md text-gray-700">
        {item.product.name}
      </span>
      <div className="flex gap-2 items-center">
        <QuantityControl
          value={item.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        <IoMdCloseCircle
          color="#444"
          size={22}
          className="hover:cursor-pointer"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
}

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-col bg-rose-500/80 w-full h-56 rounded-md py-5 px-10 text-white">
      <h2 className="text-3xl font-bold mb-5">Cart</h2>
      <div className="grid grid-cols-2 gap-1">
        {cart.items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
    </div>
  );
}
