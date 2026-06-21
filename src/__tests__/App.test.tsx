/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  it('renders the Dashboard heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /dashboard/i })
    ).toBeInTheDocument();
  });

  it('renders the copyright footer', () => {
    render(<App />);

    expect(
      screen.getByText(/expensetracker\. all rights reserved\./i)
    ).toBeInTheDocument();
  });

  it('renders an empty sidebar', () => {
    render(<App />);

    expect(screen.getByLabelText(/navigation/i)).toBeEmptyDOMElement();
  });
});
