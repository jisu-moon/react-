import { useState } from 'react';
import { IItems } from '../../App';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

interface IProps {
  items: IItems[];
}

function Expenses({ items }: IProps) {
  const [filteredYear, setFilteredYear] = useState('all');

  const yearFliterHandler = (year: string) => setFilteredYear(year);
  const filteredItems = () => {
    if (filteredYear === 'all') return items;
    return items.filter(item => filteredYear === item.date.getFullYear() + '');
  };

  return (
    <div className='Wrapper'>
      <ExpensesFilter yearFliterHandler={yearFliterHandler} />
      {filteredItems().map(item => (
        <ExpenseItem item={item} key={item.id} />
      ))}
    </div>
  );
}
export default Expenses;
