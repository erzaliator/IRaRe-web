import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";
import data from "@/public/data/latest.json";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      {/* Navbar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter">IRaRe</h1>
          <div className="space-x-6 text-sm font-medium">
            <Link href="/" className="text-primary underline underline-offset-4">Rankings</Link>
            <Link href="/analysis" className="text-muted-foreground hover:text-primary transition-colors">Analysis Hub</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-10">
        <h2 className="text-3xl font-bold mb-2">Indian Research Rankings</h2>
        <p className="text-muted-foreground mb-8">
          Comparing official NIRF rankings against research-based impact.
        </p>
        
        <DataTable columns={columns} data={data} />

        {/* Footnote */}
        <footer className="mt-16 border-t pt-8 text-xs text-muted-foreground">
          <p>
            <strong>Methodology Note:</strong> Rankings derived from aggregated research output data (CSRankings). 
            NIRF rankings are based on official MoE publications. Delta represents the rank variance 
            between official metrics and research-based impact.
          </p>
          <p className="mt-2 italic">Data maintained by IRaRe Research Initiative.</p>
        </footer>
      </main>
    </div>
  );
}
