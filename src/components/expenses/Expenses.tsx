import ExpenseItem from './ExpenseItem';

interface IProps {
  items: IItems[];
}

export interface IItems {
  id: string;
  title: string;
  amount: number;
  date: Date;
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
