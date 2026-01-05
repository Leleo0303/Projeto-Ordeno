import type { ReactNode } from "react";
import "./PageLayout.css";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return <main className="page-layout">{children}</main>;
}

export default PageLayout;
