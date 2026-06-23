import { DashboardLayout } from './DashboardLayout';
import { ExpenseSearchBar } from './ExpenseSearchBar';
import { ExpenseTable } from './ExpenseTable';
import { MonthlySummary } from './MonthlySummary';
import { useExpenses } from '../hooks/useExpenses';

export const Dashboard = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedMonth,
    setSelectedMonth,
    filteredExpenses,
    monthlySummary,
  } = useExpenses();

  return (
    <>
      <ExpenseSearchBar value={searchQuery} onChange={setSearchQuery} />

      <DashboardLayout
        rightPanel={
          <>
            <MonthlySummary
              selectedMonth={selectedMonth}
              onMonthChange={setSelectedMonth}
              summary={monthlySummary}
            />
            <ExpenseTable expenses={filteredExpenses} />
          </>
        }
      />
    </>
  );
};
