import { Table } from "./table";
export function DataTable({
  rows,
}: {
  rows: Array<Record<string, React.ReactNode>>;
}) {
  return <Table rows={rows} />;
}
