import { useRef, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { IdChecker } from "./IdChecker";
import { useDispatch } from "react-redux";
import { addId } from "../../redux/state-panels/cSlice";

export function range(start: number, count: number = 10): number[] {
  return Array.from({ length: count }, (_, i) => start + i);
}

export default function PanelC() {
  const renderCountRef = useRef(0);
  const c = useAppSelector((state) => state.c);
  const dispatch = useDispatch();

  const [startId, setStartId] = useState(0);
  const [inputValue, setInputValue] = useState("");

  renderCountRef.current += 1;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    setInputValue(onlyNums);
  };

  const handleAddButton = () => {
    if (inputValue === "") return;
    dispatch(addId(inputValue));
  };

  return (
    <div className="flex flex-col bg-blue-400 w-full h-72 rounded-md py-6 px-10 text-white justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">PanelC</h2>
        <div className="flex items-end gap-2 text-xl">
          <span>Render Count</span>
          <span className="flex items-center justify-center bg-blue-700/70 text-lg text-white w-10 h-6 rounded-md font-bold ">
            {renderCountRef.current}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between w-full text-xl bg-white/30 rounded-md py-2 px-4">
          <span>Ids: [ {Object.keys(c.ids).join(", ")} ]</span>
          <div className="flex gap-2 text-sm">
            <input
              className="bg-white w-10 text-gray-900 rounded-sm px-1"
              value={inputValue}
              onChange={handleInputChange}
              maxLength={2}
              placeholder="num"
            />
            <button
              onClick={handleAddButton}
              className="bg-blue-500 font-bold rounded-sm flex justify-center items-center py-1 px-2 text-sm hover:cursor-pointer">
              ADD
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-32">
          <div className="flex gap-2">
            <h2 className="text-lg">Id Checkers with Render Count</h2>
            <div className="flex items-center">
              <span>( hasId: </span>
              <div className="w-4 h-4 bg-green-400/80 rounded-full mx-1"></div>
              <span>)</span>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-2">
            {range(startId).map((id) => (
              <IdChecker key={id} id={id} />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setStartId((prev) => Math.max(prev - 10, 0))}
              className="bg-cyan-400 w-full h-8 rounded-sm flex items-center justify-center hover:cursor-pointer">
              Prev
            </button>
            <button
              onClick={() => setStartId((prev) => Math.min(prev + 10, 30))}
              className="bg-rose-300 w-full h-8 rounded-sm flex items-center justify-center hover:cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
