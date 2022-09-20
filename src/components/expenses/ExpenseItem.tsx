import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import { IItems } from './Expenses';

interface IProps {
  item: IItems;
}

function ExpenseItem({ item }: IProps) {
  const [title, setTitle] = useState(item.title);
  const buttonHandler = () => {
    setTitle('update');
  };
  return (
    <div className='card' style={{ border: '1px solid #000' }}>
      <ExpenseDate date={item.date} />
      <div>
        <h2>{title}</h2>
        <div className='price'>{item.amount}</div>
      </div>
      <button onClick={buttonHandler}>Click</button>
    </div>
  );
}

export default ExpenseItem;
