import { Sidebar } from './components/Sidebar';
import './styles/global.scss';

export const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-body">
        <main className="main-content">
          <h1 className="page-heading">Dashboard</h1>
        </main>

        <footer className="app-footer">
          <p>&copy; {year} ExpenseTracker. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
