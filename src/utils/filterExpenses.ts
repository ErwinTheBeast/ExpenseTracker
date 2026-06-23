import type { Expense } from '../types/expense';

export const toYearMonth = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};

export const isInMonth = (
  expenseDate: string,
  selectedMonth: string
): boolean => expenseDate.startsWith(selectedMonth);

export const matchesSearch = (expense: Expense, query: string): boolean => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return true;
  }

  return (
    expense.name.toLowerCase().includes(normalized) ||
    expense.department.toLowerCase().includes(normalized) ||
    expense.category.toLowerCase().includes(normalized)
  );
};

export const filterExpenses = (
  expenses: Expense[],
  selectedMonth: string,
  searchQuery: string
): Expense[] =>
  expenses.filter(
    (expense) =>
      isInMonth(expense.date, selectedMonth) &&
      matchesSearch(expense, searchQuery)
  );
