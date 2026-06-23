import { useMemo, useState } from 'react';
import { dummyExpenses } from '../data/dummyExpenses';
import { computeMonthlySummary } from '../utils/computeMonthlySummary';
import { filterExpenses, toYearMonth } from '../utils/filterExpenses';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(() =>
    toYearMonth(new Date())
  );

  const filteredExpenses = useMemo(
    () => filterExpenses(expenses, selectedMonth, searchQuery),
    [expenses, selectedMonth, searchQuery]
  );

  const monthlySummary = useMemo(
    () => computeMonthlySummary(filteredExpenses),
    [filteredExpenses]
  );

  return {
    expenses,
    setExpenses,
    searchQuery,
    setSearchQuery,
    selectedMonth,
    setSelectedMonth,
    filteredExpenses,
    monthlySummary,
  };
};
