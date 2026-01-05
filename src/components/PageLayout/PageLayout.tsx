import "./PageLayout.css";
import type { ReactNode } from "react";

interface PageLayoutProps {
  subtitle: string;
  children: ReactNode;
}

function PageLayout({ subtitle, children }: PageLayoutProps) {
  return (
    <div className="page-container">
      <div className="page-panel">
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
