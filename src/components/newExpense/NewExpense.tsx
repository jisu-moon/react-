import { IItems } from '../../App';
import ExpenseForm from './ExpenseForm';

interface IProps {
  setExpenses: (data: IItems) => void;
}

function NewExpense({ setExpenses }: IProps) {
  return (
    <div className='wrapper'>
      <ExpenseForm setExpenses={setExpenses} />
    </div>
  );
}

export default NewExpense;
