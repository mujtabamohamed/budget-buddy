"use client";

import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import { addDays, format } from "date-fns";
import "rsuite/dist/rsuite.min.css";

type DateRange = [Date, Date] | null;

export default function DatePickerCard() {
  const [dateRange, setDateRange] = useState<DateRange>(null);

  const quickRanges = [
    {
      label: "Last 7 Days",
      onClick: () => setDateRange([addDays(new Date(), -7), new Date()]),
    },
    {
      label: "Last 30 Days",
      onClick: () => setDateRange([addDays(new Date(), -30), new Date()]),
    },
    {
      label: "Last 90 Days",
      onClick: () => setDateRange([addDays(new Date(), -90), new Date()]),
    },
    {
      label: "Last 365 Days",
      onClick: () => setDateRange([addDays(new Date(), -365), new Date()]),
    },
  ];

  const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

  return (
    <div className="flex flex-col">
      {/* <div className="flex justify-between">
        <div className="h-[70px] flex flex-col px-6 gap-4 justify-center">
          <h2 className="bg-[#fff]/5 text-[#fff] w-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
            Date Range
          </h2>
        </div>
      </div> */}

      {/* <div className="flex justify-center fill-[#ededed] items-center h-[380px] border-t border-[#2a2a2a]">
        <div className="w-full max-w-[250px] space-y-4">
          <div className="flex flex-col justify-center gap-4"> */}
            {quickRanges.map((range) => (
              <button
                key={range.label}
                onClick={range.onClick}
                className="px-4 py-2 bg-[#2a2a2a] text-white border border-[#3a3a3a]
                        rounded-2xl hover:bg-[#3a3a3a] transition-colors"
              >
                {range.label}
              </button>
            ))}
          {/* </div> */}

          <DateRangePicker
            value={dateRange}
            onChange={(value) => setDateRange(value as DateRange)}
            appearance="default"
            placeholder="Custom Range"
            style={{ width: "100%" }}
            placement="bottomEnd"
            cleanable
            block
            renderValue={(value) => {
              if (!value) return "";
              return `${formatDate(value[0])} - ${formatDate(value[1])}`;
            }}
          />
        {/* </div>
      </div> */}
    </div>
  );
}
