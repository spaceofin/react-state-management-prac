import Auth from "../components/Shop/Auth";
import ProductList from "../components/Shop/ProductList";
import User from "../components/Shop/User";

export default function Shop() {
  return (
    <div>
      <div className="inline-grid grid-cols-2 gap-5 p-10">
        <Auth />
        <User />
        <ProductList />
      </div>
    </div>
  );
}
