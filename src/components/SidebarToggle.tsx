import { SidebarToggleButton } from './SidebarToggleButton';
import { SidebarToggleIcon } from './SidebarToggleIcon';

type SidebarToggleProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export const SidebarToggle = ({ collapsed, onToggle }: SidebarToggleProps) => (
  <SidebarToggleButton collapsed={collapsed} onToggle={onToggle}>
    <SidebarToggleIcon />
  </SidebarToggleButton>
);
