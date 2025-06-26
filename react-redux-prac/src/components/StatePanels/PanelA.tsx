import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { appendZeroToArr, incrementNum } from "../../redux/state-panels/aSlice";

export default function PanelA() {
  const renderCountRef = useRef(0);
  const a = useAppSelector((state) => state.a);
  const dispatch = useAppDispatch();

  renderCountRef.current += 1;

  return (
    <div className="flex flex-col bg-blue-400 w-96 h-56 rounded-md py-6 px-10 text-white justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">PanelA</h2>
        <div className="flex items-end gap-2 text-xl">
          <span>Render Count</span>
          <span className="flex items-center justify-center bg-blue-700/70 text-lg text-white w-10 h-6 rounded-md font-bold ">
            {renderCountRef.current}
          </span>
        </div>
      </div>
      <div className="flex flex-col text-xl bg-white/30 rounded-md p-4 gap-2">
        <div className="flex justify-between items-center">
          <span>num: {a.num}</span>
          <button
            onClick={() => dispatch(incrementNum())}
            className="bg-green-500 rounded-full w-6 h-6 flex justify-center items-center pb-1 text-2xl  hover:cursor-pointer">
            +
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span className="w-52 h-8 overflow-x-auto whitespace-nowrap">
            arr: [{a.arr.map((num) => num).join(",")}]
          </span>
          <button
            onClick={() => dispatch(appendZeroToArr())}
            className="bg-amber-500/80 rounded-full w-6 h-6 flex justify-center items-center pb-1 text-2xl  hover:cursor-pointer">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
