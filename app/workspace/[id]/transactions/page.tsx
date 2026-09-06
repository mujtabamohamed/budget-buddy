import BalanceCard from "@/components/BalanceCard";
import OverviewCard from "@/components/OverviewCard";
import GroupCard from "@/components/GroupCard";

import React from "react";
import Filter from "@/components/Filter";
import TransactionTable from "@/components/TransactionTable";
import BudgetCard from "@/components/BudgetCard";

function Transactions() {
  return (
    <div
      suppressHydrationWarning={true}
      className="flex justify-center items-center py-4 px-6">
      <div className="flex flex-col">
        
        <div className="flex justify-between pb-8 gap-24">
          <h2 className="text-4xl font-medium text-[#ededed]">Transactions</h2>
          <Filter />
        </div>
        
        <div className="flex flex-col h-full overflow-hidden bg-[#0f0f0f] gap-8 justify-center">
          <div className="grid grid-cols-12 gap-8 justify-center">
            <div className="col-span-4 w-full h-[200px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <BalanceCard />
            </div>
            <div className="col-span-4 w-full h-[200px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <OverviewCard />
            </div>
            <div className="col-span-4 w-full h-[200px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <BudgetCard />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12  h-[800px] w-full rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <TransactionTable />
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
