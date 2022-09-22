import { useState } from 'react';
import { IItems } from '../../App';
import Wrapper from '../UI/Wrapper';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

interface IProps {
  items: IItems[];
}

function Expenses({ items }: IProps) {
  const [filteredYear, setFilteredYear] = useState('all');

  const filteredExpenses = () => {
    if (filteredYear === 'all') return items;
    return items.filter(item => filteredYear === item.date.getFullYear() + '');
  };

  return (
    <Wrapper>
      <ExpensesFilter setFilteredYear={setFilteredYear} />
      <ExpensesList items={filteredExpenses} />
    </Wrapper>
  );
}
export default Expenses;
