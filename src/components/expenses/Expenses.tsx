import { useState } from 'react';
import { IExpense } from '../../types/expenses';
import Wrapper from '../UI/Wrapper';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

interface IProps {
  expenses: IExpense[];
}

function Expenses({ expenses }: IProps) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredExpenses = () => {
    if (filteredYear === 'all') return expenses;
    return expenses.filter(
      expense => filteredYear === expense.date.getFullYear() + '',
    );
  };

  return (
    <Wrapper>
      <ExpensesFilter setFilteredYear={setFilteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Wrapper>
  );
}
export default Expenses;
