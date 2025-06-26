import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  appendZeroToArr as appendToArrA,
  incrementNum as incrementA,
} from "../../redux/state-panels/aSlice";
import {
  appendZeroToArr as appendToArrB,
  incrementNum as incrementB,
} from "../../redux/state-panels/bSlice";

export default function PanelAB() {
  const renderCountRef = useRef(0);
  const a = useAppSelector((state) => state.a);
  const b = useAppSelector((state) => state.b);
  const dispatch = useAppDispatch();

  renderCountRef.current += 1;

  return (
    <div className="flex flex-col bg-blue-400 w-full h-56 rounded-md py-6 px-10 text-white justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">PanelAB</h2>
        <div className="flex items-end gap-2 text-xl">
          <span>Render Count</span>
          <span className="flex items-center justify-center bg-blue-700/70 text-lg text-white w-10 h-6 rounded-md font-bold ">
            {renderCountRef.current}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex w-full text-xl bg-white/30 rounded-md">
          <div className="flex justify-center items-center h-full bg-white rounded-l-md w-12 text-blue-700/80 font-bold text-2xl">
            A
          </div>
          <div className="flex flex-col w-full text-xl rounded-md p-4 gap-2">
            <div className="flex justify-between items-center">
              <span>num: {a.num}</span>
              <button
                onClick={() => dispatch(incrementA())}
                className="bg-green-500 rounded-full w-6 h-6 flex justify-center items-center pb-1 text-2xl  hover:cursor-pointer">
                +
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-52 h-8 overflow-x-auto whitespace-nowrap">
                arr: [{a.arr.map((num) => num).join(",")}]
              </span>
              <button
                onClick={() => dispatch(appendToArrA())}
                className="bg-amber-500/80 rounded-full w-6 h-6 flex justify-center items-center pb-1 text-2xl  hover:cursor-pointer">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full text-xl bg-white/30 rounded-md">
          <div className="flex justify-center items-center h-full bg-white rounded-l-md w-12 text-blue-700/80 font-bold text-2xl">
            B
          </div>
          <div className="flex flex-col w-full text-xl rounded-md p-4 gap-2">
            <div className="flex justify-between items-center">
              <span>num: {b.num}</span>
              <button
                onClick={() => dispatch(incrementB())}
                className="bg-green-500 rounded-full w-6 h-6 flex justify-center items-center pb-1 text-2xl  hover:cursor-pointer">
                +
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-52 h-8 overflow-x-auto whitespace-nowrap">
                arr: [{b.arr.map((num) => num).join(",")}]
              </span>
              <button
                onClick={() => dispatch(appendToArrB())}
                className="bg-amber-500/80 rounded-full w-6 h-6 flex justify-center items-center pb-1 text-2xl  hover:cursor-pointer">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
