import React from "react";
import {
  ArrowRightLeft,
  Circle,
  ArrowUpRight,
  IndianRupee,
} from "lucide-react";

function BalanceCard() {
  return (
    <div suppressHydrationWarning={true} className="flex flex-col">
      <div className="flex justify-between">
        <div className="h-[70px] flex flex-col px-6 gap-4 justify-center">
          <h2 className="bg-[#fff]/5 text-[#fff] w-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
            Balance
          </h2>
        </div>

        <div className="m-5 text-[#8c8c8c] border border-[#2a2a2a] h-fit px-2 py-1 rounded-xl">
          <ArrowRightLeft className="size-5" />
        </div>
      </div>

      <div className="flex justify-between h-[130px] border-t border-[#2a2a2a]">
        <div className="flex flex-col gap-2 px-6 justify-center">
          <h2 className="text-3xl font-semibold text-[#ededed]">₹4,00,000000</h2>
          <p className="text-[#8c8c8c] text-sm">*Including taxes and fees.</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 px-6">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="w-fit px-3 text-xs shadow-lg font-medium rounded-full bg-[#3ee58c]/5 text-[#3ee58c] border border-[#2a2a2a]">
              Income
            </h2>
            <h2 className="text-sm font-medium text-[#3ee58c]">₹4,00,00000</h2>
          </div>

          <div className="flex flex-col gap-1 items-start justify-center">
            <h2 className="w-fit px-2 text-xs shadow-lg font-medium rounded-full bg-[#e53e3e]/5 text-[#e53e3e] border border-[#2a2a2a]">
              Expenses
            </h2>
            <h2 className="text-sm font-medium  text-[#e53e3e]">₹4,00,000</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
