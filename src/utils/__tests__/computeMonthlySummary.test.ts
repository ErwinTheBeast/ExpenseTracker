import type { Expense } from '../../types/expense';
import { computeMonthlySummary } from '../computeMonthlySummary';

const sampleExpenses: Expense[] = [
  {
    id: '1',
    name: 'Grocery run',
    amount: 84.5,
    date: '2026-06-03',
    department: 'Personal',
    category: 'Food',
  },
  {
    id: '2',
    name: 'Team lunch',
    amount: 42.0,
    date: '2026-06-08',
    department: 'Work',
    category: 'Food',
  },
  {
    id: '3',
    name: 'Electric bill',
    amount: 120.0,
    date: '2026-05-15',
    department: 'Home',
    category: 'Bills',
  },
];

describe('computeMonthlySummary', () => {
  it('computes total, count, and department breakdown', () => {
    const summary = computeMonthlySummary(sampleExpenses);

    expect(summary.total).toBeCloseTo(246.5);
    expect(summary.count).toBe(3);
    expect(summary.byDepartment).toEqual({
      Personal: 84.5,
      Work: 42.0,
      Home: 120.0,
    });
  });

  it('returns zeroed values for an empty list', () => {
    const summary = computeMonthlySummary([]);

    expect(summary.total).toBe(0);
    expect(summary.count).toBe(0);
    expect(summary.byDepartment).toEqual({
      Personal: 0,
      Work: 0,
      Home: 0,
    });
  });
});
