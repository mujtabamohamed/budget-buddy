import React from "react";
import { ArrowUpRight, IndianRupee, Triangle } from "lucide-react";
import { Button } from "./ui/button";

function TeamMembersCard() {
  return (
    <div className="flex flex-col">
      
      <div className="h-[70px] w-full flex justify-between items-center border-b border-[#2a2a2a] px-6">
        <h2 className="bg-[#fff]/5 text-[#fff] w-fit h-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
          Team Members
        </h2>
        <h2 className="text-base font-medium text-[#8c8c8c]">June 2024</h2>
      </div>

      <div className="h-[530px] flex flex-col items-center gap-10 text-[#ededed] mt-6 px-16">
        
        <div className="flex w-[450px] justify-center items-center gap-4 bg-[#2a2a2a] px-2 py-3 rounded-xl border-[#3a3a3a]">
          <img 
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Jf7L1uLyKL81OhzN2fk-x0OSKXABNLEZYg&s"} 
            className="size-12 rounded-full " 
          />
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">Mujtaba Mohamed</h2>
            <div className="flex justify-between gap-24">
              <p className="text-sm">mujtabamohamed@gmail.com</p>
              <Button className="bg-[#e53e3e]/10 text-[#e53e3e] text-xs shadow-lg font-medium rounded-full h-6 hover:bg-[#e53e3e]/20">Remove</Button>
            </div>
          </div>  
        </div>

        
        
      </div>
    </div>
  );
}

export default TeamMembersCard;
