import { IItems } from '../../App';
import ExpenseItem from './ExpenseItem';

interface IProps {
  items: IItems[];
}

function Expenses({ items }: IProps) {
  return (
    <div className='Wrapper'>
      {items
        ? items.map(item => <ExpenseItem item={item} key={item.id} />)
        : null}
    </div>
  );
}
export default Expenses;
