import { IChartBar } from '../../types/expenses';

import './chart.css';

function ChartBar({ label, value, maxValue }: IChartBar) {
  const height = maxValue > 0 ? `${(value / maxValue) * 100}%` : '0%';
  return (
    <div className='bar-wrap'>
      <div className='bar'>
        <div className='gauge' style={{ height: height }}></div>
      </div>
      <h2>{label}</h2>
    </div>
  );
}

export default ChartBar;
