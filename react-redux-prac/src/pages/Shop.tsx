import Auth from "../components/Shop/Auth";
import User from "../components/Shop/User";

export default function Shop() {
  return (
    <div className="p-10 flex grid-cols-2 gap-10">
      <Auth />
      <User />
    </div>
  );
}
