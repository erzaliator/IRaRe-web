import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";
import data from "@/public/data/latest.json";

export default function RankingsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">India Research Rankings</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
