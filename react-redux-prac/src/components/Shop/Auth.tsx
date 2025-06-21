import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { login, logout } from "../../redux/user/userSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    let id = sessionStorage.getItem(`userId_${email}`);
    if (!id) {
      id = uuidv4();
      sessionStorage.setItem(`userId_${email}`, id);
    }
    sessionStorage.setItem(
      "userSession",
      JSON.stringify({
        userId: id,
        Email: email,
        userName: name,
        isLoggedIn: true,
      })
    );
    dispatch(login({ id, email, name }));
  };

  const handleLogout = () => {
    // sessionStorage.removeItem("userSession");
    dispatch(logout());
  };

  return (
    <div className="flex flex-col bg-green-500/90 w-96 h-56 rounded-md py-5 px-10">
      <h2 className="text-3xl font-bold text-white mb-5">
        {!user.isLoggedIn ? "Login" : "Logout"}
      </h2>
      {!user.isLoggedIn ? (
        <div className="flex flex-col">
          <div className="flex items-center text-xl h-10">
            <label className="w-20 text-white">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full my-1 mx-1 text-lg rounded-sm border-3 border-green-600 bg-white px-2"
            />
          </div>
          <div className="flex items-center text-xl h-10">
            <label className="w-20 text-white">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full my-1 mx-1 text-lg rounded-sm border-3 border-green-600 bg-white px-2"
            />
          </div>
        </div>
      ) : (
        <div className="h-[80px] pb-2">
          <div className="h-full bg-white/60 py-2 px-4 text-white rounded-md text-xl">
            User is Logged In
          </div>
        </div>
      )}
      <div className="flex justify-end pr-2 mt-1">
        <button
          onClick={() => {
            !user.isLoggedIn ? handleLogin() : handleLogout();
          }}
          className="w-26 text-white text-lg rounded-md bg-green-800/80 hover:cursor-pointer">
          {!user.isLoggedIn ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
}
