export interface IExpensesHandler {
  expensesHandler: (data: IItems) => void;
  showHandler?: (show: boolean) => void;
}
