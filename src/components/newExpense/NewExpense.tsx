import { useState } from 'react';
import { IItems } from '../../App';
import Wrapper from '../UI/Wrapper';
import ExpenseForm from './ExpenseForm';

interface IProps {
  expensesHandler: (data: IItems) => void;
}

function NewExpense({ expensesHandler }: IProps) {
  const [showForm, setShowForm] = useState(false);

  const onClick = () => setShowForm(true);
  return (
    <Wrapper a='sdfs'>
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
