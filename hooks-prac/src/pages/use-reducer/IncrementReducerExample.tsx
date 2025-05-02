import { useReducer, useRef } from "react";

const incrementReducer = (state: number, action?: number) => {
  return action !== undefined ? action : state + 1;
};

const initialState = 0;

export default function incrementReducerExample() {
  const [count, dispatch] = useReducer(incrementReducer, initialState);
  const countRef = useRef(-1);

  countRef.current += 1;
  console.log(countRef.current);

  return (
    <div className="py-14 px-16 flex flex-col gap-10">
      <h1 className="text-4xl font-bold text-slate-600">
        Rerender Count: {countRef.current}
      </h1>
      <span className="text-3xl text-slate-600">Count: {count}</span>
      <div className="flex flex-col gap-5">
        <button
          className="px-4 py-3 text-2xl w-[600px] bg-blue-500 text-white rounded-xl hover:cursor-pointer"
          onClick={() => dispatch(1)}>
          {`() => dispatch(1) Click`}
        </button>
        <button
          className="px-4 py-3 text-2xl  w-[600px] bg-blue-500 text-white rounded-xl hover:cursor-pointer"
          onClick={() => dispatch()}>
          {`() => dispatch() Click`}
        </button>
      </div>
    </div>
  );
}
