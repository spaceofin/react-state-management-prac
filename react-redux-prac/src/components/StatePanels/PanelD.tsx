import { useRef } from "react";
import { fetchNumbers } from "../../redux/state-panels/dSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Circles = ({ num }: { num: number }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="flex justify-center items-center bg-white/70 rounded-md w-8 text-blue-800">
        {num}
      </span>
      <div className="flex gap-1 mt-1">
        {Array.from({ length: num }).map((_, i) => (
          <div key={i} className="bg-blue-600/80 w-4 h-4 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default function PanelD() {
  const dispatch = useAppDispatch();
  const { nums, status } = useAppSelector((state) => state.d);
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;

  const handleFetchClick = () => {
    dispatch(fetchNumbers());
  };

  return (
    <div className="flex flex-col bg-blue-400 w-full h-72 rounded-md py-6 px-10 text-white gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">PanelD</h2>
        <div className="flex items-end gap-2 text-xl">
          <span>Render Count</span>
          <span className="flex items-center justify-center bg-blue-700/70 text-lg text-white w-10 h-6 rounded-md font-bold ">
            {renderCountRef.current}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleFetchClick}
          className="bg-sky-700/50 w-1/2 rounded-sm text-lg border-2 border-sky-700 hover:cursor-pointer active:bg-sky-800">
          Fetch
        </button>
        <div className="flex flex-col gap-1 bg-blue-300/70 px-4 py-2 rounded-sm h-38">
          {status === "succeeded" ? (
            nums.map((num, i) => <Circles key={i} num={num} />)
          ) : (
            <p className="text-2xl flex items-center h-full w-full px-10">
              {status === "idle" ? "Click Fetch Button" : `${status}...`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
