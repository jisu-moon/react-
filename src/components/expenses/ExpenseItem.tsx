import React, { useState } from 'react';
import { IItems } from '../../App';
import ExpenseDate from './ExpenseDate';

interface IProps {
  item: IItems;
}

function ExpenseItem({ item }: IProps) {
  const [title, setTitle] = useState(item.title);
  const buttonHandler = () => {
    setTitle('update');
  };
  return (
    <li className='card' style={{ border: '1px solid #000' }}>
      <ExpenseDate date={item.date} />
      <h2>{title}</h2>
      <div className='price'>${item.amount}</div>
      <button onClick={buttonHandler}>Click</button>
    </li>
  );
}

export default ExpenseItem;
