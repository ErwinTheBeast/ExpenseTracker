export const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>&copy; {year} ExpenseTracker. All rights reserved.</p>
    </footer>
  );
};
