import { IItems } from '../../App';
import ExpenseItem from './ExpenseItem';

interface IProps {
  items: () => IItems[];
}

function ExpensesList({ items }: IProps) {
  return (
    <ul className='lists' style={{ padding: 0 }}>
      {items().length === 0 ? (
        <div>No expenses found.</div>
      ) : (
        items().map(item => <ExpenseItem item={item} key={item.id} />)
      )}
    </ul>
  );
}

export default ExpensesList;
