import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses, legendClasses, PieChart } from '@mui/x-charts';

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

export default function PieChartCard() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="h-[70px] flex flex-col px-6 gap-4 justify-center">
          <h2 className="bg-[#fff]/5 text-[#fff] w-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
            Expenses
          </h2>
        </div>

        <div className="m-5 text-[#8c8c8c]">
          Expense Distribution
        </div>
      </div>

      <div className="flex justify-center  items-center h-[380px] border-t border-[#2a2a2a]">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'series A', color: '#ff6384' },
              { id: 1, value: 15, label: 'series B', color: '#36a2eb' },
              { id: 2, value: 20, label: 'series C', color: '#ffce56' },
            ],
          },
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
            [`& .${legendClasses.label}`]: {
              color: '#ffffff', // Change legend text color here
            },
            
          }}
        width={400}
        height={200}
      />
        
      </div>
    </div>



  );
}
