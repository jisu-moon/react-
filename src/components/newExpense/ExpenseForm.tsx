import React, { useState } from 'react';
import { IItems } from '../../App';
import { uuidv4 } from '../../utils/utils';

interface IProps {
  expensesHandler: (data: IItems) => void;
  showHandler: (show: boolean) => void;
}

function ExpenseForm({ expensesHandler, showHandler }: IProps) {
  const [newData, setNewData] = useState({
    title: '',
    amount: 0,
    date: new Date(),
    id: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, amount } = newData;
    if (title === '' || amount === 0) return;
    newData.id = uuidv4();
    expensesHandler(newData);
    setNewData({ title: '', amount: 0, date: new Date(), id: '' });
    event.currentTarget.reset();
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id, value },
    } = event;
    setNewData(prev => {
      return {
        ...prev,
        [id]:
          id === 'title' ? value : id === 'amount' ? +value : new Date(value),
      };
    });
  };
  const onClick = () => showHandler(false);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text' onChange={onChange} />
      </div>
      <div>
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          type='number'
          min='0.01'
          step='0.01'
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type='date'
          min='2019-01-01'
          max='2022-12-31'
          onChange={onChange}
        />
      </div>
      <div>
        <button type='submit'>Add Expense</button>
        <button type='button' onClick={onClick}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
