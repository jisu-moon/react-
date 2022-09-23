export interface IExpense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export interface IChart {
  label: string;
  value: number;
}

export interface IChartBar extends IChart {
  maxValue: number;
}

export interface IFilterExpenses {
  expenses: (year?: string | IItems?) => IItems[];
}
