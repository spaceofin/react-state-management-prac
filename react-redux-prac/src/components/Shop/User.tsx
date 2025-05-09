import { useAppSelector } from "../../redux/hooks";

export default function User() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="bg-blue-500/90 w-96 h-56 rounded-md py-5 px-10 text-white">
      <h2 className="text-3xl font-bold mb-5">User</h2>
      <div className="flex flex-col text-xl">
        <span>Email: {user.email}</span>
        <span>Name: {user.name}</span>
        <span>Id: {user.id}</span>
      </div>
    </div>
  );
}
