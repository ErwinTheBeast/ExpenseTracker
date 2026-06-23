import type { MonthlySummary as MonthlySummaryData } from '../utils/computeMonthlySummary';
import {
  formatCurrency,
  formatMonthLabel,
  shiftMonth,
} from '../utils/formatters';

type MonthlySummaryProps = {
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  summary: MonthlySummaryData;
};

export const MonthlySummary = ({
  selectedMonth,
  onMonthChange,
  summary,
}: MonthlySummaryProps) => (
  <section className="monthly-summary" aria-label="Monthly summary">
    <div className="monthly-summary__header">
      <h2 className="monthly-summary__title">Monthly Summary</h2>
      <div className="month-nav">
        <button
          type="button"
          className="month-nav__button"
          onClick={() => onMonthChange(shiftMonth(selectedMonth, -1))}
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="month-nav__label">
          {formatMonthLabel(selectedMonth)}
        </span>
        <button
          type="button"
          className="month-nav__button"
          onClick={() => onMonthChange(shiftMonth(selectedMonth, 1))}
          aria-label="Next month"
        >
          ›
        </button>
      </div>
    </div>

    <div className="summary-cards">
      <div className="summary-card">
        <span className="summary-card__label">Total</span>
        <span className="summary-card__value">
          {formatCurrency(summary.total)}
        </span>
      </div>
      <div className="summary-card">
        <span className="summary-card__label">Expenses</span>
        <span className="summary-card__value">{summary.count}</span>
      </div>
      <div className="summary-card summary-card--wide">
        <span className="summary-card__label">By department</span>
        <ul className="summary-card__breakdown">
          <li>
            <span>Personal</span>
            <span>{formatCurrency(summary.byDepartment.Personal)}</span>
          </li>
          <li>
            <span>Work</span>
            <span>{formatCurrency(summary.byDepartment.Work)}</span>
          </li>
          <li>
            <span>Home</span>
            <span>{formatCurrency(summary.byDepartment.Home)}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
