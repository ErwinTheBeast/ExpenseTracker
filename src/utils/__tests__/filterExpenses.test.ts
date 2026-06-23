import type { Expense } from '../../types/expense';
import { filterExpenses } from '../filterExpenses';

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

describe('filterExpenses', () => {
  it('filters expenses by selected month', () => {
    const result = filterExpenses(sampleExpenses, '2026-06', '');

    expect(result).toHaveLength(2);
    expect(result.map((expense) => expense.id)).toEqual(['1', '2']);
  });

  it('matches search query against name', () => {
    const result = filterExpenses(sampleExpenses, '2026-06', 'lunch');

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Team lunch');
  });

  it('matches search query against department', () => {
    const result = filterExpenses(sampleExpenses, '2026-06', 'work');

    expect(result).toHaveLength(1);
    expect(result[0].department).toBe('Work');
  });

  it('matches search query against category', () => {
    const result = filterExpenses(sampleExpenses, '2026-05', 'bills');

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Electric bill');
  });

  it('combines month and search filters', () => {
    const result = filterExpenses(sampleExpenses, '2026-06', 'food');

    expect(result).toHaveLength(2);
  });
});
