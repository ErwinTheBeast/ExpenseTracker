type ExpenseSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const ExpenseSearchBar = ({
  value,
  onChange,
}: ExpenseSearchBarProps) => (
  <div className="search-bar">
    <input
      type="search"
      className="search-bar__input"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search by name, department, or category…"
      aria-label="Search expenses"
    />
  </div>
);
