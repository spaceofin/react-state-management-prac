import { useSelector } from "react-redux";
import { selectHasId } from "../../redux/state-panels/cSlice";
import { useRef } from "react";

export default function IdChecker({ id }: { id: number }) {
  const hasId = useSelector(selectHasId(id));
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div
      className={`flex flex-col border-1 rounded-sm p-2 leading-4 ${
        hasId && "bg-green-400/80"
      }`}>
      <span>id: {id}</span>
      <span>rc: {renderCountRef.current}</span>
    </div>
  );
}
