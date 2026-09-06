"use client"
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { ChartNoAxesCombined } from 'lucide-react';
import React from 'react';

const showMark = ({ index }: { index: number }) => index % 2 === 0;

function GraphCard() {
  return (
    <div className="flex flex-col">
      <div className="h-[70px] w-full flex justify-between px-6 items-center border-b border-[#2a2a2a]">
        <h2 className="bg-[#fff]/5 text-[#fff] w-fit h-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
          Analytics
        </h2>
        <div className='px-2 text-[#8c8c8c] border border-[#2a2a2a] h-fit py-1 rounded-xl'>
          <ChartNoAxesCombined className='size-6'/>
        </div>
      </div>

      <div className='h-[380px] flex justify-center text-[#aaa] items-center'>
      <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={600}
          height={350}
          sx={{
            [`& .${axisClasses.root}`]: {
              stroke: '#ddd', // Customize axis color here
            },
            [`& .${axisClasses.tick}`]: {
              stroke: '#ddd', // Customize tick color
            },
            [`& .${axisClasses.line}`]: {
              strokeWidth: 2,
              stroke: '#ddd', // Optional: adjust line thickness
            },
          }}
        />
      </div>
    </div>
  );
}

export default GraphCard;