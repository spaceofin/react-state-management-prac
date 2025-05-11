import { useAppSelector } from "../../redux/hooks";

export default function ProductDetail() {
  const { product } = useAppSelector((state) => state.product);

  return (
    <div className="bg-yellow-500/90 w-96 h-56 rounded-md py-5 px-10 text-white">
      <h2 className="text-3xl font-bold mb-5">Product Detail</h2>
      {product && (
        <div className="flex flex-col text-lg">
          <span>Id: {product.id}</span>
          <span>Name: {product.name}</span>
          <span>Price: {product.price}</span>
          <span>Stock: {product.stock}</span>
        </div>
      )}
    </div>
  );
}
