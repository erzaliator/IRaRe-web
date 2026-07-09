"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

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
  { 
    accessorKey: "cs", 
    header: ({ column }) => (
      <Button variant="ghost" className="p-0" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        CSRank <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ) 
  },
  { 
    accessorKey: "nirf", 
    header: ({ column }) => (
      <Button variant="ghost" className="p-0" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        NIRF <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ) 
  },
  {
    accessorKey: "delta",
    header: ({ column }) => (
      <Button variant="ghost" className="p-0" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Delta <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const delta = row.getValue("delta") as number;
      return (
        <Badge variant={delta >= 0 ? "default" : "destructive"}>
          {delta > 0 ? `+${delta}` : delta}
        </Badge>
      );
    },
  },
  { 
    accessorKey: "score", 
    header: ({ column }) => (
      <Button variant="ghost" className="p-0" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Score <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ) 
  },
];
