import "./List.css";

interface Column<T> {
  key: keyof T;
  label: string;
}

interface ListProps<T> {
  columns: readonly Column<T>[];
  data: readonly T[];
}

function List<T>({ columns, data }: ListProps<T>) {
  return (
    <div className="list">
      <div className="list-header">
        {columns.map((col) => (
          <span key={String(col.key)}>{col.label}</span>
        ))}
      </div>

      {data.map((row, index) => (
        <div className="list-row" key={index}>
          {columns.map((col) => (
            <span key={String(col.key)}>
              {String(row[col.key])}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default List;
