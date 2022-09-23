import ExpenseItem from './ExpenseItem';
import { IFilterExpenses } from '../../types/expenses';

function ExpensesList({ expenses }: IFilterExpenses) {
  return (
    <ul className='lists' style={{ padding: 0 }}>
      {expenses().length === 0 ? (
        <div>No expenses found.</div>
      ) : (
        expenses().map(item => <ExpenseItem expense={item} key={item.id} />)
      )}
    </ul>
  );
}

export default ExpensesList;
