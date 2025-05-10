import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setProducts } from "../../redux/product/productListSlice";
import productData from "../../data/products.json";

export default function ProductList() {
  const productList = useAppSelector((state) => state.productList);
  const products = productList.products;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(productData));
  }, []);

  return (
    <div className="bg-orange-500/90 w-96 h-56 rounded-md py-5 px-10 text-white">
      <h2 className="text-3xl font-bold mb-5">Products</h2>
      <div className="inline-grid grid-cols-2 gap-2">
        {products.map((product) => (
          <div className="w-36 h-12 flex justify-center items-center bg-white/50 rounded-md text-lg border-4 border-white/50 text-gray-700/80 font-bold ">
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
}
