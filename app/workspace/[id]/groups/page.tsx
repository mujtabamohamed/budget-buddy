import React from "react";
import TeamMembersCard from "@/components/TeamMembersCard";
import UsersCard from "@/components/UsersCard";

function Groups() {
  return (
    <div
      suppressHydrationWarning={true}
      className="flex justify-center items-center py-4 px-6">
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex justify-between pb-8 gap-24">
          <h2 className="text-4xl font-medium text-[#ededed]">Members</h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col h-full overflow-hidden bg-[#0f0f0f] gap-8 justify-center">
          {/* Cards Section */}
          <div className="grid grid-cols-12 gap-8 justify-center">
            {/* Team Members Card */}
            <div className="col-span-6 w-full h-[600px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <TeamMembersCard />
            </div>
            {/* Users Card */}
            <div className="col-span-6 w-full h-[400px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg">
              <UsersCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
