"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRangePicker } from "rsuite";
import { addDays, format } from "date-fns";
import "rsuite/dist/rsuite.min.css";

interface YearSelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
}
type DateRange = [Date, Date] | null;

const Filters = () => {

    const [dateRange, setDateRange] = useState<DateRange>(null);

  const quickRanges = [
    {
      label: "Last 7 Days",
      value: "last-7-days",
      onClick: () => setDateRange([addDays(new Date(), -7), new Date()]),
    },
    {
      label: "Last 30 Days",
      value: "last-30-days",
      onClick: () => setDateRange([addDays(new Date(), -30), new Date()]),
    },
    {
      label: "Last 90 Days",
      value: "last-90-days",
      onClick: () => setDateRange([addDays(new Date(), -90), new Date()]),
    },
    {
      label: "Last 365 Days",
      value: "last-365-days",
      onClick: () => setDateRange([addDays(new Date(), -365), new Date()]),
    },
    {
        label: "Custom",
        value: "custom",
        onClick: () => setDateRange([addDays(new Date(), -365), new Date()]),
    },
  ];

  const formatDate = (date: Date) => format(date, "dd/MM/yyyy");
  return (
    <div className="w-[200px]">
      <Select>
        <SelectTrigger className="bg-[#1a1a1a] text-[#ededed] text-md border 
                                border-[#2a2a2a] focus:outline-none focus-visible:ring-0">
          <SelectValue
            placeholder={quickRanges[1].label}
            className="text-[#ededed] placeholder:text-[#ededed]"/>
            
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border border-[#2a2a2a]">
          <SelectGroup className="rounded-xl">
            
            {quickRanges.map((range) => (
              <SelectItem
                key={range.label}
                value={range.value}
                onClick={range.onClick}
                className="focus:bg-[#2a2a2a] text-[#ededed] focus:text-[#ededed]"
              >
                {range.label}
              </SelectItem>
            ))}

            {/* <DateRangePicker
                className="focus:bg-[#2a2a2a] text-[#ededed] focus:text-[#ededed]"
                value={dateRange}
                onChange={(value) => setDateRange(value as DateRange)}
                appearance="default"
                placeholder="Custom"
                style={{ width: "100%" }}
                placement="bottomEnd"
                cleanable
                block
                renderValue={(value) => {
                if (!value) return "";
                return `${formatDate(value[0])} - ${formatDate(value[1])}`;
                }}
            /> */}

          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
