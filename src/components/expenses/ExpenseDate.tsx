interface IProps {
  date: Date;
}

function ExpenseDate({ date }: IProps) {
  const month = date.toLocaleString('ko-KR', { month: 'long' });
  const day = date.toLocaleString('ko-KR', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      {year}년 {month} {day}
    </div>
  );
}

export default ExpenseDate;
