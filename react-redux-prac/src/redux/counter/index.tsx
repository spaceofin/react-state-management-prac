import { useAppSelector, useAppDispatch } from "../hooks";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center">
      <button
        className="bg-red-500/80 text-white px-4 py-2 rounded-md ml-2 text-lg"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <span className="text-2xl mx-2 font-bold w-8 flex justify-center items-center">
        {count}
      </span>
      <button
        className="bg-blue-500/80 text-white px-4 py-2 rounded-md mr-2 text-lg"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}
