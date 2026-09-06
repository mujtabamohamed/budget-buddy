import { ArrowRightLeft, Circle } from "lucide-react";
import React from "react";
import { EllipsisVertical } from 'lucide-react';

function TransactionCard() {
  const transactions = [
    {
      item: "Software",
      date: "20-Nov-2024",
      type: "Income",
      amount: "+ ₹10,000",
    },
    {
      item: "Product",
      date: "20-Nov-2024",
      type: "Income",
      amount: "+ ₹10,000",
    },
    {
      item: "Zaffer",
      date: "20-Nov-2024",
      type: "Expense",
      amount: "- ₹10,000",
    },
    {
      item: "Laravel engineer",
      date: "20-Nov-2024",
      type: "Income",
      amount: "+ ₹30,000",
    },
    {
      item: "Software",
      date: "20-Nov-2024",
      type: "Income",
      amount: "+ ₹10,000",
    },
    {
      item: "Product",
      date: "20-Nov-2024",
      type: "Income",
      amount: "+ ₹10,000",
    },
    {
      item: "Zaffer",
      date: "20-Nov-2024",
      type: "Expense",
      amount: "- ₹10,000",
    },
    {
      item: "Laravel engineer",
      date: "20-Nov-2024",
      type: "Income",
      amount: "+ ₹30,000",
    },
    {
      item: "Zaffer",
      date: "20-Nov-2024",
      type: "Expense",
      amount: "- ₹10,000",
    },
    {
      item: "Laravel engineer",
      date: "20-Nov-2024",
      type: "Income",
      amount: "+ ₹30,000",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="h-[70px] flex justify-between px-6 items-center border-b border-[#2a2a2a]">
        <h2 className="bg-[#fff]/5 text-[#fff] w-fit h-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
          Transactions
        </h2>
        <h2 className="text-base text-[#8c8c8c]">Last 10 Transactions</h2>
      </div>

      <div className="h-[380px] justify-center border-t border-[#2a2a2a] px-6 overflow-y-scroll">
        
        <div className="flex flex-col justify-center items-center py-6 gap-4 ">
        
        {transactions.map((item, id) => (
          <div key={id} className="w-full h-fit flex justify-between items-center bg-[#2a2a2a] 
                                  border border-[#3a3a3a] rounded-2xl px-8 py-3 gap-4">
            <div  className="flex flex-col gap-1">          
              <h2 className="text-base font-semibold text-[#ddd]">{item.item}</h2>
              <p className="text-xs text-[#ddd]">{item.date}</p>
            </div>

              <p className={`text-lg font-medium rounded-full w-fit h-fit px-2 
                            ${item.type == "Income" ? `bg-[#3ee58c]/5 text-[#3ee58c]` : 
                            `bg-[#e53e3e]/5 text-[#e53e3e]` }`}>
                {item.amount}
              </p>
          </div>
          ))}

        </div>
      
        
      </div>
    </div>
  );
}

export default TransactionCard;
