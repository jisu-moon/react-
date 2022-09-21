import React, { useState } from 'react';

function ExpenseForm({ expensesHandler }: any) {
  const [newData, setNewData] = useState({
    title: '',
    amount: 0,
    date: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, amount, date } = newData;
    if (title === '' || amount === 0 || date === '') return;
    expensesHandler(newData);
    setNewData({ title: '', amount: 0, date: '' });
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
      </div>
    </form>
  );
}

export default ExpenseForm;
