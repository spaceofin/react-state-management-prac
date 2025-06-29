import { useAppSelector } from "../../redux/hooks";
import type { CartItem } from "../../types/cart";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  selectCartTotalQuantity,
  selectCartTotalPrice,
  selectDiscountedTotalPrice,
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
    <div className="w-[300px] flex flex-col gap-2 bg-gray-50/50 py-2 px-4 rounded-sm">
      <div className="flex justify-between items-center">
        <span className="bg-gray-100 w-[130px] flex justify-center rounded-md text-gray-700">
          {item.product.name}
        </span>
        <span className="text-lg mr-2">Price: {item.product.price}</span>
      </div>
      <div className="flex gap-2 items-center justify-end">
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
  const totalQuantity = useAppSelector(selectCartTotalQuantity);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const discountedTotalPrice = useAppSelector(selectDiscountedTotalPrice);

  return (
    <div className="flex flex-col justify-between bg-rose-500/80 w-full h-74 rounded-md py-5 px-10 text-white gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Cart</h2>
        <div className="grid grid-cols-2 gap-1">
          {cart.items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center text-xl gap-4 mr-10">
        <span className="w-44">Total Quantity: {totalQuantity}</span>
        <span className="w-44">Total Price: {totalPrice.toFixed(2)}</span>
        <span className="w-72">
          Discounted Total Price: {discountedTotalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
