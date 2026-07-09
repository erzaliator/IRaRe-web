"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export type Ranking = {
  id: string;
  institution: string;
  nirf_eng: number;
  nirf_res: number;
  cs: number;
  delta: number;
};

export const columns: ColumnDef<Ranking>[] = [
  { accessorKey: "institution", header: "Institution" },
  { 
    accessorKey: "cs", 
    header: ({ column }) => (
      <Button variant="ghost" className="p-0" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        CSRank <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ) 
  },
  { accessorKey: "nirf_eng", header: "NIRF (Eng)" },
  { accessorKey: "nirf_res", header: "NIRF (Res)" },
  {
    accessorKey: "delta",
    header: "Delta (CS vs Res)",
    cell: ({ row }) => {
      const delta = row.getValue("delta") as number;
      return (
        <Badge variant={delta >= 0 ? "default" : "destructive"}>
          {delta > 0 ? `+${delta}` : delta}
        </Badge>
      );
    },
  }
];
