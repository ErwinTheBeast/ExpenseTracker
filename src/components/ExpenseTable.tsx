import type { Expense } from '../types/expense';
import { formatCurrency } from '../utils/formatters';

type ExpenseTableProps = {
  expenses: Expense[];
};

export const ExpenseTable = ({ expenses }: ExpenseTableProps) => (
  <div className="expense-table-wrapper">
    <table className="expense-table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Category</th>
          <th scope="col" className="expense-table__amount-header">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan={5} className="expense-table__empty">
              No expenses match your filters.
            </td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.name}</td>
              <td>{expense.department}</td>
              <td>{expense.category}</td>
              <td className="expense-table__amount">
                {formatCurrency(expense.amount)}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);
