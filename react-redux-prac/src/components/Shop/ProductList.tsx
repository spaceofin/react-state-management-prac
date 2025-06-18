import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import type { Product } from "../../types/product";
import { setProduct } from "../../redux/product/productSlice";

function Product({
  product,
  selectedProductIds,
  setSelectedProductIds,
}: {
  product: Product;
  selectedProductIds: Set<number>;
  setSelectedProductIds: React.Dispatch<React.SetStateAction<Set<number>>>;
}) {
  const isSelected = selectedProductIds.has(product.id);
  const dispatch = useAppDispatch();

  const onProductClick = (productId: number) => {
    setSelectedProductIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) newSet.delete(productId);
      else newSet.add(productId);

      return newSet;
    });
    dispatch(setProduct(product));
  };

  return (
    <div
      onClick={() => onProductClick(product.id)}
      className={`w-36 h-10 flex justify-center items-center ${
        isSelected
          ? "bg-gray-700/70 text-white border-gray-800/50"
          : "bg-white/50 text-gray-700/80 border-white/50"
      } rounded-md text-lg border-4 font-bold hover:cursor-pointer`}>
      {product.name}
    </div>
  );
}

export default function ProductList() {
  const { products } = useAppSelector((state) => state.productList);

  const [selectedProductIds, setSelectedProductIds] = useState<Set<number>>(
    new Set()
  );

  return (
    <div className="bg-orange-500/90 w-96 h-56 rounded-md py-5 px-10 text-white">
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <div className="inline-grid grid-cols-2 gap-1 w-full">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            selectedProductIds={selectedProductIds}
            setSelectedProductIds={setSelectedProductIds}
          />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <button className="text-lg font-bold px-4 py-1 bg-white/70 text-gray-700 rounded-sm w-full hover:cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
