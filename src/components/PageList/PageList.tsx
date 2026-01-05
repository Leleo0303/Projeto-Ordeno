import type { ReactNode } from "react";
import PageLayout from "../PageLayout/PageLayout";
import "./PageList.css";

/* ================================
   TIPOS
================================ */
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
        {items.map((item, index) => (
          <div key={index} className="page-item">
            {fields.map((field) => (
              <div key={String(field.key)}>
                <strong>{field.label}</strong>
                <div>{String(item[field.key])}</div>
              </div>
            ))}

            {renderExtra && <div>{renderExtra(item)}</div>}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default PageList;
