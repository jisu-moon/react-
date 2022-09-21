import { IItems } from '../../App';
import ExpenseForm from './ExpenseForm';

interface IProps {
  expensesHandler: (data: IItems) => void;
}

function NewExpense({ expensesHandler }: IProps) {
  return (
    <div className='wrapper'>
      <ExpenseForm expensesHandler={expensesHandler} />
    </div>
  );
}

export default NewExpense;
