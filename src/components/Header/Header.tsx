import "./Header.css";

interface HeaderProps {
  subtitle?: string;
}

function Header({ subtitle }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header-main">
        <h1>Ordeno</h1>
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
