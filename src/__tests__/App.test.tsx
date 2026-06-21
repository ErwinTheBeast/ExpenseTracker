/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  it('renders the ExpenseTracker heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /expensetracker/i })
    ).toBeInTheDocument();
  });
});
