import { useEffect, useState } from 'react';
import { IItems } from '../../App';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

interface IProps {
  items: IItems[];
}

function Expenses({ items }: IProps) {
  const [yearFilter, setYearFilter] = useState('all');
  const [itemsFilter, setItemsFilter] = useState(items);

  useEffect(() => {
    if (yearFilter === 'all') return setItemsFilter(items);
    const filter = items.filter(item => {
      return yearFilter === item.date.getFullYear() + '';
    });
    setItemsFilter(filter);
  }, [yearFilter, items]);

  return (
    <div className='Wrapper'>
      <ExpensesFilter yearFilter={setYearFilter} />
      {itemsFilter
        ? itemsFilter.map(item => {
            return <ExpenseItem item={item} key={item.id} />;
          })
        : null}
    </div>
  );
}
export default Expenses;
