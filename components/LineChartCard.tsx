import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { ArrowRightLeft } from 'lucide-react';
import { axisClasses, legendClasses } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 1398, 9800, 3908, 4800, 3800];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export default function LineCharCard() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="h-[70px] flex flex-col px-6 gap-4 justify-center">
          <h2 className="bg-[#fff]/5 text-[#fff] w-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
            Revenue
          </h2>
        </div>

        <div className="m-5 text-[#8c8c8c]">
          Income & Expenditure overtime
        </div>
      </div>

      <div className="flex justify-center fill-[#ededed] items-center h-[380px] border-t border-[#2a2a2a]">
        <LineChart
          width={1000}
          height={350}
          
          series={[
            { data: pData, label: 'Income', color: '#e53e3e' },
            { data: uData, label: 'Expense', color: '#3ee58c' },
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
          
          xAxis={[{ scaleType: 'point', data: xLabels, fill: "#ededed" }]}
        />
        
      </div>
    </div>



  );
}
