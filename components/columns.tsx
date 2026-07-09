"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export type Ranking = {
  id: string;
  institution: string;
  nirf: number;
  cs: number;
  delta: number;
  score: number;
};

export const columns: ColumnDef<Ranking>[] = [
  { accessorKey: "institution", header: "Institution" },
  { accessorKey: "nirf", header: "NIRF" },
  { accessorKey: "cs", header: "CSRank" },
  {
    accessorKey: "delta",
    header: "Delta",
    cell: ({ row }) => {
      const delta = row.getValue("delta") as number;
      return (
        <Badge variant={delta >= 0 ? "default" : "destructive"}>
          {delta > 0 ? `+${delta}` : delta}
        </Badge>
      );
    },
  },
  { accessorKey: "score", header: "Score" },
];
