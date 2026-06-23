export type Department = 'Personal' | 'Work' | 'Home';

export type Category =
  | 'Food'
  | 'Transport'
  | 'Bills'
  | 'Entertainment'
  | 'Shopping'
  | 'Other';

export type Expense = {
  id: string;
  name: string;
  amount: number;
  date: string;
  department: Department;
  category: Category;
};
