import { IChart } from '../../types/expenses';
import ChartBar from './ChartBar';

interface IProps {
  chartDataPoints: IChart[];
}

function Chart({ chartDataPoints }: IProps) {
  const dataPointValues = chartDataPoints.map(({ value }) => value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {chartDataPoints.map(({ label, value }) => (
        <ChartBar key={label} label={label} value={value} maxValue={maxValue} />
      ))}
    </div>
  );
}

export default Chart;
