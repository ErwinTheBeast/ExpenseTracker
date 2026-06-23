/// <reference types="@testing-library/jest-dom" />
import { fireEvent, render, screen } from '@testing-library/react';
import { MonthlySummary } from '../MonthlySummary';

const summary = {
  total: 126.5,
  count: 2,
  byDepartment: {
    Personal: 84.5,
    Work: 42.0,
    Home: 0,
  },
};

describe('MonthlySummary', () => {
  it('changes the selected month with prev/next controls', () => {
    const onMonthChange = jest.fn();

    render(
      <MonthlySummary
        selectedMonth="2026-06"
        onMonthChange={onMonthChange}
        summary={summary}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Previous month' }));
    expect(onMonthChange).toHaveBeenCalledWith('2026-05');

    fireEvent.click(screen.getByRole('button', { name: 'Next month' }));
    expect(onMonthChange).toHaveBeenCalledWith('2026-07');
  });

  it('renders summary totals', () => {
    render(
      <MonthlySummary
        selectedMonth="2026-06"
        onMonthChange={jest.fn()}
        summary={summary}
      />
    );

    expect(screen.getByText('$126.50')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('June 2026')).toBeInTheDocument();
  });
});
