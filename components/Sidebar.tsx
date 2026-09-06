"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  ChartNoAxesCombined,
  ArrowRightLeft,
  Users,
  LayoutDashboard,
} from "lucide-react";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const workspaceId = pathname.split('/')[2]; 

  return (
    <div className="w-[250px] border-r border-[#1a1a1a]">
      <div className="flex flex-col">
        

        <div className="flex flex-col gap-2 px-2 mt-8 cursor-pointer text-[#ddd]">
        <div
          className={`flex items-center gap-3 hover:bg-[#1a1a1a] rounded-xl px-4 py-2 ${
            pathname.includes("/dashboard") ? "bg-[#1f1f1f]" : ""
          }`}
          onClick={() => router.push(`/workspace/${workspaceId}/dashboard`)}
        >
            <LayoutDashboard  size={20} />
            <h2 className="text-lg font-medium">Dashboard</h2>
          </div>

          <div
            className={`flex items-center gap-3 hover:bg-[#1a1a1a] rounded-xl px-4 py-2 ${
              pathname.includes("/analytics") ? "bg-[#1a1a1a]" : ""
            }`}
            onClick={() => {
              router.push(`/workspace/${workspaceId}/analytics`);
            }}
          >
            <ChartNoAxesCombined size={20} />
            <h2 className="text-lg font-medium">Analytics</h2>
          </div>

          <div
            className={`flex items-center gap-3 hover:bg-[#1a1a1a] rounded-xl px-4 py-2 ${
              pathname.includes("/transactions") ? "bg-[#1a1a1a]" : ""
            }`}
            onClick={() => {
              router.push(`/workspace/${workspaceId}/transactions`);
            }}
          >
            <ArrowRightLeft size={20} />
            <h2 className="text-lg font-medium">Transactions</h2>
          </div>

          <div
            className={`flex items-center gap-3 hover:bg-[#1a1a1a] rounded-xl px-4 py-2 ${
              pathname.includes("/groups") ? "bg-[#1a1a1a]" : ""
            }`}
            onClick={() => {
              router.push(`/workspace/${workspaceId}/groups`);
            }}
          >
            <Users size={20} />
            <h2 className="text-lg font-medium">Group</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
