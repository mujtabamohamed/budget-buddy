import React from "react";
import { ArrowUpRight, IndianRupee, Search, Triangle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function TeamMembersCard() {
  return (
    <div className="flex flex-col">
      <div className="h-[70px] w-full flex justify-between px-6 items-center border-b border-[#2a2a2a]">
        <h2 className="bg-[#fff]/5 text-[#fff] w-fit h-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
          Add Members
        </h2>
        <h2 className="text-base font-medium text-[#8c8c8c]">June 2024</h2>
      </div>

      <div className="h-[400px] flex flex-col items-center gap-6 text-[#ededed] px-16">
        <div className="space-y-2 mt-6">
          <div className="relative ">
            <Input
              id="input"
              className="peer pe-3 ps-8 py-0 w-[450px] bg-[#2a2a2a] border border-[#333] rounded-lg placeholder:text-[#888] text-[#ededed] focus:outline-none focus-visible:ring-0"
              placeholder="Search..."
              type="search"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <Search size={16} strokeWidth={1} className="text-[#ededed]"/>
            </div>
          </div>
        </div>
        
        <div className="flex w-[450px] justify-center items-center gap-4 bg-[#2a2a2a] px-2 py-3 rounded-xl border-[#3a3a3a]">
          <img 
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Jf7L1uLyKL81OhzN2fk-x0OSKXABNLEZYg&s"} 
            className="size-12 rounded-full " 
          />
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">Mujtaba Mohamed</h2>
            <div className="flex justify-between gap-24">
              <p className="text-sm">mujtabamohamed@gmail.com</p>
              <Button className="bg-[#3ee58c]/10 text-[#3ee58c] text-xs shadow-lg font-medium rounded-full h-6 hover:bg-[#3ee58c]/20">Add</Button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default TeamMembersCard;
