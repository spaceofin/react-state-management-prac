import PanelA from "../components/StatePanels/PanelA";
import PanelAB from "../components/StatePanels/PanelAB";
import PanelB from "../components/StatePanels/PanelB";
import PanelC from "../components/StatePanels/PanelC";

export default function StatePanels() {
  return (
    <div className="w-[1440px]">
      <div className="inline-grid grid-cols-2 gap-5 p-10">
        <PanelA />
        <PanelB />
        <div className="flex flex-col gap-5 col-span-2">
          <PanelAB />
          <PanelC />
        </div>
      </div>
    </div>
  );
}
