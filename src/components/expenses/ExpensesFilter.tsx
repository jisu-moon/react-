interface IProps {
  setFilteredYear: (year: string) => void;
}

const ExpensesFilter = ({ setFilteredYear }: IProps) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setFilteredYear(event.currentTarget.value);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onChange} defaultValue='2021'>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
