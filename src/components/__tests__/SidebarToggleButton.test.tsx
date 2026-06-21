/// <reference types="@testing-library/jest-dom" />
import { fireEvent, render, screen } from '@testing-library/react';
import { SidebarToggleButton } from '../SidebarToggleButton';

describe('SidebarToggleButton', () => {
  it('reflects collapsed state and calls onToggle', () => {
    const onToggle = jest.fn();

    const { rerender } = render(
      <SidebarToggleButton collapsed={false} onToggle={onToggle}>
        Toggle
      </SidebarToggleButton>
    );

    const toggle = screen.getByRole('button', { name: /collapse sidebar/i });

    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(toggle);
    expect(onToggle).toHaveBeenCalledTimes(1);

    rerender(
      <SidebarToggleButton collapsed={true} onToggle={onToggle}>
        Toggle
      </SidebarToggleButton>
    );

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAccessibleName(/expand sidebar/i);
  });
});
