/// <reference types="@testing-library/jest-dom" />
import { fireEvent, render, screen } from '@testing-library/react';
import { ExpenseSearchBar } from '../ExpenseSearchBar';

describe('ExpenseSearchBar', () => {
  it('updates the search query on input', () => {
    const onChange = jest.fn();

    render(<ExpenseSearchBar value="" onChange={onChange} />);

    fireEvent.change(screen.getByLabelText(/search expenses/i), {
      target: { value: 'food' },
    });

    expect(onChange).toHaveBeenCalledWith('food');
  });
});
