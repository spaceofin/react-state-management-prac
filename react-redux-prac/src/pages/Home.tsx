import { Counter } from "../redux/counter";

export default function Home() {
  return (
    <div className="py-14 px-16">
      <h1 className="text-4xl font-bold text-slate-800">
        React Redux Practice
      </h1>
      <p className="text-xl my-2 text-slate-700">
        Hello, This is a Project for practicing React-Redux
      </p>
      <div className="my-10">
        <Counter />
      </div>
    </div>
  );
}
