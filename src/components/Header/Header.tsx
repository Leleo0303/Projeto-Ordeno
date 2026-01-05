import "./Header.css";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header-main">
        <h1>{title}</h1>
      </div>

      {subtitle && (
        <div className="app-header-sub">
          <span>{subtitle}</span>
        </div>
      )}
    </header>
  );
}

export default Header;
