import type { Department, Expense } from '../types/expense';

export type MonthlySummary = {
  total: number;
  count: number;
  byDepartment: Record<Department, number>;
};

const emptyByDepartment = (): Record<Department, number> => ({
  Personal: 0,
  Work: 0,
  Home: 0,
});

export const computeMonthlySummary = (expenses: Expense[]): MonthlySummary => {
  const byDepartment = emptyByDepartment();
  let total = 0;

  for (const expense of expenses) {
    total += expense.amount;
    byDepartment[expense.department] += expense.amount;
  }

  return {
    total,
    count: expenses.length,
    byDepartment,
  };
};
