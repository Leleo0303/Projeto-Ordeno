import { useState, useEffect } from "react";
import "./Header.css";

interface HeaderProps {
  subtitle?: string;
}

function Header({ subtitle }: HeaderProps) {

  // STATE PROVISÓRIO

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [darkMode]);

  // FIM DO STATE PROVISÓRIO

  return (
    <header className="app-header">
      <div className="app-header-main">
        <h1>ORDENO</h1>

        {/* TOGGLE PROVISÓRIO */}
        
        <button
          style={{
            marginTop: "8px",
            marginLeft: "auto",
            padding: "4px 8px",
            fontSize: "0.875rem",
            cursor: "pointer",
            backgroundColor: "var(--color-primary-muted)",
            color: "var(--color-on-primary-muted)",
            borderRadius: "4px",
            border: "none"
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* FIM DO TOGGLE PROVISÓRIO */}

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
