import { useState } from 'react';
import { SidebarToggle } from './SidebarToggle';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarClassName = `sidebar${collapsed ? ' sidebar--collapsed' : ''}`;

  return (
    <aside className={sidebarClassName} aria-label="Navigation">
      <SidebarToggle
        collapsed={collapsed}
        onToggle={() => setCollapsed((prev) => !prev)}
      />
    </aside>
  );
};
