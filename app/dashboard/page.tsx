import BalanceCard from "@/components/BalanceCard";
import OverviewCard from "@/components/OverviewCard";
import GroupCard from "@/components/GroupCard";

import React from "react";
import TransactionCard from "@/components/TransactionCard";
import GraphCard from "@/components/GraphCard";
import Filter from "@/components/Filter";
import { auth } from "@clerk/nextjs/server";
import pool from "@/lib/db";

async function Dashboard() {
  

    return (
      <div suppressHydrationWarning={true} className="flex justify-center items-center py-4 px-6">
        <div className="flex flex-col">
          <div className="flex justify-between pb-8 gap-24">
            <h2 className="text-4xl font-medium text-[#ededed]">Dashboard</h2>
          
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
                <GroupCard />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 h-[450px] w-full rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
                <TransactionCard />
              </div>

              <div className="col-span-8 h-[450px] w-full rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
                <GraphCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Dashboard;
