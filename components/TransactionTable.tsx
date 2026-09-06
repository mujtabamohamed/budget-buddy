"use client";
import React from "react";
import {
  ArrowRightLeft,
  Circle,
  ArrowUpRight,
  IndianRupee,
  EllipsisVertical,
  CreditCard,
  User,
  Delete,
  Trash,
  Edit,
  Trash2,
  Pencil,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NextTable from "./Table";

function TransactionTable() {
  const invoices = [
    {
      id: "1",
      item: "Groceries dashbdhsavgdv d hsavhdsvad hs dagd ",
      description: "These are the groceries that I bought from amazon",
      date: "20-Nov-2024",
      user: "https://",
      type: "Expense",
      amount: "₹4,00,00,000",
    },
    {
      id: "2",
      item: "Groceries",
      description: "These are the groceries that I bought from amazon",
      date: "20-Nov-2024",
      user: "https://",
      type: "Income",
      amount: "₹4,00,00,000",
    },
    {
      id: "3",
      item: "Groceries",
      description: "These are the groceries that I bought from amazon",
      date: "20-Nov-2024",
      user: "https://",
      type: "Expense",
      amount: "₹4,00,00,000",
    },
    {
      id: "4",
      item: "Groceries",
      description: "These are the groceries that I bought from amazon",
      date: "20-Nov-2024",
      user: "https://",
      type: "Expense",
      amount: "₹4,00,00,000",
    },
    {
      id: "5",
      item: "Groceries",
      description: "These are the groceries that I bought from amazon",
      date: "20-Nov-2024",
      user: "https://",
      type: "Income",
      amount: "₹4,00,00,000",
    },
    {
      id: "6",
      item: "Groceries",
      description: "These are the groceries that I bought from amazon",
      date: "20-Nov-2024",
      user: "https://",
      type: "Income",
      amount: "₹4,00,00,000",
    },
  ];

  return (
    <div suppressHydrationWarning={true} className="flex flex-col">
      <div className="flex justify-between px-6 items-center">
        <div className="h-[70px] flex flex-col gap-4 justify-center">
          <h2 className="bg-[#fff]/5 text-[#fff] w-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
            Transactions
          </h2>
        </div>
        <h2 className="text-base font-medium text-[#8c8c8c]">Last 30 days</h2>
      </div>

      <div className="flex flex-col h-[800px] border-t border-[#2a2a2a] py-8 px-12">
        {/* <NextTable /> */}

        <div className="flex justify-between mb-6">
          
          <div className="space-y-2 ">
            <div className="relative ">
              <Input
                id="input"
                className="peer pe-3 ps-8 py-0 w-[400px] bg-[#2a2a2a] border border-[#333] rounded-lg placeholder:text-[#888] text-[#ededed] focus:outline-none focus-visible:ring-0"
                placeholder="Search..."
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Search size={16} strokeWidth={1} className="text-[#ededed]"/>
              </div>
            </div>
          </div>

          <div className="">
            <Button 
              className="bg-[#ededed] text-[#1f1f1f] w-28 font-medium text-base rounded-xl border-2 border-[#aaa] hover:bg-[#dedede]">
              <Plus size={36}/>
              <span>Add New</span>
            </Button>
          </div>
        </div>

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className="sticky top-0 bg-[#1a1a1a] z-10">
            <TableRow className="text-[#adadad]">
              <TableHead className="w-[240px]">Item</TableHead>
              <TableHead className="w-[240px]">Description</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">User</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            {invoices.map((invoice) => (
              <TableRow className="text-base" key={invoice.id}>
                <TableCell className="font-medium">{invoice.item}</TableCell>
                <TableCell className="font-medium">
                  {invoice.description}
                </TableCell>
                <TableCell className="text-center">{invoice.date}</TableCell>
                <TableCell className="text-center">{invoice.user}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={`w-fit px-3 py-1 text-sm shadow-lg font-medium rounded-full border border-[#2a2a2a] 
                    ${
                      invoice.type == "Income"
                        ? "bg-[#3ee58c]/5 text-[#3ee58c]"
                        : "bg-[#e53e3e]/5 text-[#e53e3e]"
                    }`}
                  >
                    {invoice.type}
                  </span>
                </TableCell>
                <TableCell className={`text-right`}>{invoice.amount}</TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-end">
                        <EllipsisVertical className="hover:bg-[#252525] p-2 size-8 rounded-full" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Pencil />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 />
                          <span
                            className="text-red"
                            onClick={() => {
                              const prompt = window.confirm(
                                "Are you sure you want to delete this document?"
                              );

                              if (prompt) {
                                alert("Hello");
                              }
                            }}
                          >
                            Delete
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

export default TransactionTable;
