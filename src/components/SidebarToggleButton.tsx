import { type ReactNode } from 'react';

type SidebarToggleButtonProps = {
  collapsed: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export const SidebarToggleButton = ({
  collapsed,
  onToggle,
  children,
}: SidebarToggleButtonProps) => (
  <button
    type="button"
    className="sidebar-toggle"
    onClick={onToggle}
    aria-expanded={!collapsed}
    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
  >
    {children}
  </button>
);
