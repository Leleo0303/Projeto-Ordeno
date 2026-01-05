import type { ReactNode } from "react";
import PageLayout from "../PageLayout/PageLayout";
import "./PageList.css";

type Field<T> = {
  key: keyof T;
  label: string;
};

interface PageListProps<T extends object> {
  items: readonly T[];
  fields: readonly Field<T>[];
  renderExtra?: (item: T) => ReactNode;
}

/* ================================
   COMPONENTE
================================ */
function PageList<T extends object>({
  items,
  fields,
  renderExtra,
}: PageListProps<T>) {
  return (
    <PageLayout>
      <div className="page-list">
        {/* HEADER ÚNICO */}
        <div className="page-list-header">
          {fields.map((field) => (
            <span key={String(field.key)}>{field.label}</span>
          ))}
          {renderExtra && <span />}
        </div>

        {/* ITENS */}
        <div className="page-list-body">
          {items.map((item, index) => (
            <div key={index} className="page-item">
              {fields.map((field) => (
                <span key={String(field.key)}>
                  {String(item[field.key])}
                </span>
              ))}

              {renderExtra && (
                <span>{renderExtra(item)}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default PageList;
