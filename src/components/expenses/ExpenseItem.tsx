import { useState } from 'react';
import { IExpense } from '../../types/expenses';
import ExpenseDate from './ExpenseDate';

interface IProps {
  expense: IExpense;
}

function ExpenseItem({ expense }: IProps) {
  const [title, setTitle] = useState(expense.title);
  const buttonHandler = () => {
    setTitle('update');
  };
  return (
    <li className='card' style={{ border: '1px solid #000' }}>
      <ExpenseDate date={expense.date} />
      <h2>{title}</h2>
      <div className='price'>${expense.amount}</div>
      <button onClick={buttonHandler}>Click</button>
    </li>
  );
}

export default ExpenseItem;
