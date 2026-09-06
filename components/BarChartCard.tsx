import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses, legendClasses, PieChart } from '@mui/x-charts';

import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BarChartCard() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="h-[70px] flex flex-col px-6 gap-4 justify-center">
          <h2 className="bg-[#fff]/5 text-[#fff] w-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
            Revenue
          </h2>
        </div>

        <div className="m-5 text-[#8c8c8c]">
          Income and Expense Comparison
        </div>
      </div>

      <div className="flex justify-center  items-center h-[380px] border-t border-[#2a2a2a]">
      <BarChart
        width={700}
        height={350}
        series={[
            { data: pData, label: 'pv', stack: 'stack1' },
            { data: amtData, label: 'amt' },
            { data: uData, label: 'uv', stack: 'stack1' },
        ]}
        sx={{
            [`& .${axisClasses.root}`]: {
              stroke: '#ededed', 
            },
            [`& .${axisClasses.tick}`]: {
              stroke: '#ededed', 
            },
            [`& .${axisClasses.line}`]: {
              stroke: '#ededed',
            },
            
          }}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
        
      </div>
    </div>



  );
}
