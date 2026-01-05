import "./PageLayout.css";
import type { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="page-container">
      <div className="page-panel">
        <header className="page-header">
          <h1>{title}</h1>
        </header>

        <div className="page-subheader">
          <span>{subtitle}</span>
        </div>

        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
