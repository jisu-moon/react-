import { useState } from 'react';
import { IItems } from '../../App';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

interface IProps {
  items: IItems[];
}

function Expenses({ items }: IProps) {
  const [itemsFilter, setItemsFilter] = useState(items);

  const yearFliterHandler = (year: string) => {
    if (year === 'all') return setItemsFilter(items);
    const filter = items.filter(item => year === item.date.getFullYear() + '');
    setItemsFilter(filter);
  };

  return (
    <div className='Wrapper'>
      <ExpensesFilter yearFliterHandler={yearFliterHandler} />
      {itemsFilter
        ? itemsFilter.map(item => {
            return <ExpenseItem item={item} key={item.id} />;
          })
        : null}
    </div>
  );
}
export default Expenses;
