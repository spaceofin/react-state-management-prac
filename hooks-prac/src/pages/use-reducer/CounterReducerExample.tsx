import { useReducer, useRef } from "react";

type State = {
  count: number;
};

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "SET"; payload: number };

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.payload };
    default:
      return state;
  }
};

const initialState = 0;
const init = (count: number) => ({ count });

export default function CounterReducerExample() {
  const [state, dispatch] = useReducer(counterReducer, initialState, init);
  const countRef = useRef(-1);

  countRef.current += 1;
  console.log(countRef.current);

  return (
    <div className="py-14 px-16 flex flex-col gap-10">
      <h1 className="text-4xl font-bold text-slate-600">
        Rerender Count: {countRef.current}
      </h1>
      <span className="text-3xl text-slate-600">Count: {state.count}</span>
      <div className="flex flex-col gap-5">
        <button
          className="px-4 py-3 text-2xl w-[600px] bg-blue-500 text-white rounded-xl hover:cursor-pointer"
          onClick={() => dispatch({ type: "INCREMENT" })}>
          {`() => dispatch({type: 'INCREMENT'})`}
        </button>
        <button
          className="px-4 py-3 text-2xl w-[600px] bg-blue-500 text-white rounded-xl hover:cursor-pointer"
          onClick={() => dispatch({ type: "DECREMENT" })}>
          {`() => dispatch({type: 'DECREMENT'})`}
        </button>
        <button
          className="px-4 py-3 text-2xl w-[600px] bg-blue-500 text-white rounded-xl hover:cursor-pointer"
          onClick={() => dispatch({ type: "RESET" })}>
          {`() => dispatch({type: 'RESET'})`}
        </button>
        <button
          className="px-4 py-3 text-2xl w-[600px] bg-blue-500 text-white rounded-xl hover:cursor-pointer"
          onClick={() => dispatch({ type: "SET", payload: 100 })}>
          {`() => dispatch({type: 'SET'}, payload: 100)`}
        </button>
      </div>
    </div>
  );
}
