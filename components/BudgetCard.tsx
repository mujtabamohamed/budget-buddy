import React from "react";
import { ArrowUpRight, IndianRupee, Triangle } from "lucide-react";

function BudgetCard() {
  return (
    <div className="flex flex-col">
      <div className="h-[70px] flex justify-between px-6 items-center border-b border-[#2a2a2a]">
        <h2 className="bg-[#fff]/5 text-[#fff] w-fit h-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
          Budget
        </h2>
        <h2 className="text-base font-medium text-[#8c8c8c]">June 2024</h2>
      </div>

      <div className="h-[130px] flex justify-center items-center gap-10 text-[#ededed]">
        <h2 className="text-lg text-[#6a6a6a]">Coming Soon...</h2>

        {/* <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold">40</h2>
          <h2 className="text-base font-medium">Transactions</h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold">40</h2>
          <h2 className="text-base font-medium">Income</h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold">16</h2>
          <h2 className="text-base font-medium">Outcome</h2>
        </div> */}
      </div>
    </div>
  );
}

export default BudgetCard;
