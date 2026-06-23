import type { ReactNode } from 'react';
import { GraphPlaceholder } from './GraphPlaceholder';

type DashboardLayoutProps = {
  rightPanel: ReactNode;
};

export const DashboardLayout = ({ rightPanel }: DashboardLayoutProps) => (
  <div className="dashboard-layout">
    <div className="dashboard-layout__left">
      <GraphPlaceholder />
    </div>
    <div className="dashboard-layout__right">{rightPanel}</div>
  </div>
);
