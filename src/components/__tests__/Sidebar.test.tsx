/// <reference types="@testing-library/jest-dom" />
import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';

describe('Sidebar', () => {
  it('toggles the collapsed state', () => {
    render(<Sidebar />);

    const sidebar = screen.getByLabelText(/navigation/i);
    const toggle = screen.getByRole('button', { name: /collapse sidebar/i });

    expect(sidebar).not.toHaveClass('sidebar--collapsed');
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(toggle);

    expect(sidebar).toHaveClass('sidebar--collapsed');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAccessibleName(/expand sidebar/i);

    fireEvent.click(toggle);

    expect(sidebar).not.toHaveClass('sidebar--collapsed');
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });
});
