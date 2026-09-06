import React from "react";
import LineChartCard from "@/components/LineChartCard";
import PieChartCard from "@/components/PieChartCard";
import BarChartCard from "@/components/BarChartCard";
import Filter from "@/components/Filter";

function Analytics() {
  return (
    <div className="flex justify-center items-center py-4 px-6">
      <div className="flex flex-col">
        <div className="flex justify-between pb-8 gap-24">
          <h2 className="text-4xl font-medium text-[#ededed]">Analytics</h2>
          <Filter />
        </div>
        <div className="flex flex-col h-full overflow-hidden bg-[#0f0f0f] gap-8 justify-center">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 h-[450px] w-full rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <LineChartCard />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 justify-center">
            <div className="col-span-4 w-full h-[450px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <PieChartCard />
            </div>
            <div className="col-span-8 w-full h-[450px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <BarChartCard />
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Analytics;
