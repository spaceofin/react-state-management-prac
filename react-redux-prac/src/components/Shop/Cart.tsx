import { useAppSelector } from "../../redux/hooks";
import type { CartItem } from "../../types/cart";

function CartItem({ item }: { item: CartItem }) {
  return <div>{item.product.name}</div>;
}

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-col bg-rose-500/80 w-full h-56 rounded-md py-5 px-10 text-white">
      <h2 className="text-3xl font-bold mb-5">Cart</h2>
      <div>
        {cart.items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
    </div>
  );
}
