/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import type { Expense } from '../../types/expense';
import { ExpenseTable } from '../ExpenseTable';

const sampleExpenses: Expense[] = [
  {
    id: '1',
    name: 'Grocery run',
    amount: 84.5,
    date: '2026-06-03',
    department: 'Personal',
    category: 'Food',
  },
];

describe('ExpenseTable', () => {
  it('renders expense rows with a category column', () => {
    render(<ExpenseTable expenses={sampleExpenses} />);

    expect(
      screen.getByRole('columnheader', { name: /category/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Grocery run')).toBeInTheDocument();
    expect(screen.getByText('Food')).toBeInTheDocument();
    expect(screen.getByText('$84.50')).toBeInTheDocument();
  });

  it('renders an empty state when there are no expenses', () => {
    render(<ExpenseTable expenses={[]} />);

    expect(
      screen.getByText('No expenses match your filters.')
    ).toBeInTheDocument();
  });
});
