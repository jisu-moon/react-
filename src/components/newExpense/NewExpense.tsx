import { useState } from 'react';
import { IExpensesHandler } from '../../types/newExpense';
import Wrapper from '../UI/Wrapper';
import ExpenseForm from './ExpenseForm';

function NewExpense({ expensesHandler }: IExpensesHandler) {
  const [showForm, setShowForm] = useState(false);

  const onClick = () => setShowForm(true);
  return (
    <Wrapper>
      {showForm ? (
        <ExpenseForm
          expensesHandler={expensesHandler}
          showHandler={setShowForm}
        />
      ) : (
        <button onClick={onClick}>Add New Expense</button>
      )}
    </Wrapper>
  );
}

export default NewExpense;
