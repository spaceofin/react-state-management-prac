import { useEffect } from "react";
import Auth from "../components/Shop/Auth";
import Cart from "../components/Shop/Cart";
import ProductDetail from "../components/Shop/ProductDetail";
import ProductList from "../components/Shop/ProductList";
import User from "../components/Shop/User";
import { useAppDispatch } from "../redux/hooks";
import { setProducts } from "../redux/product/productListSlice";
import productData from "../data/products.json";
import Coupons from "../components/Shop/Coupons";

export default function Shop() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(productData));
  }, []);

  return (
    <div className="w-[1440px]">
      <div className="inline-grid grid-cols-2 gap-5 p-10">
        <Auth />
        <User />
        <ProductList />
        <ProductDetail />
        <div className="flex flex-col col-span-2 gap-5">
          <Cart />
          <Coupons />
        </div>
      </div>
    </div>
  );
}
