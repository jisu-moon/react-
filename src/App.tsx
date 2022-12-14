import { useState } from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import { IExpense } from './types/expenses';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const expensesHandler = (expense: IExpense) => {
    setExpenses(prev => {
      expense.id = `e${prev.length + 1}`;
      return [expense, ...prev];
    });
  };
  return (
    <>
      <NewExpense expensesHandler={expense => expensesHandler(expense)} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
