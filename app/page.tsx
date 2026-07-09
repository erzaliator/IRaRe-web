import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";
import data from "@/public/data/latest.json";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white text-center py-2 text-sm px-4">
        If you found this a better way to look at universities, please consider visiting <a href="https://csrankings.org" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#00f4cf] hover:opacity-80 transition-opacity">CSRankings</a>!
      </div>

      {/* Solid Navbar: #00f4cf */}
      <nav className="bg-[#00f4cf] text-slate-900 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 
            className="text-3xl font-extrabold tracking-tight"
            style={{ textShadow: "0 0 12px rgba(255, 255, 255, 1)" }}
          >
            IRaRe
          </h1>
          <div className="space-x-8 text-base font-medium">
            <Link href="/" className="underline underline-offset-4 hover:opacity-75 transition-opacity">
              Rankings
            </Link>
            {/* Updated Navbar Link */}
            <Link href="/insights" className="hover:opacity-75 transition-opacity">
              Insights
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10 flex-grow">
        {/* Main Title: #ffaa1d */}
        <h2 className="text-3xl font-bold mb-2 text-[#ffaa1d]">
          Indian Research Rankings
        </h2>
        <p className="text-slate-600 mb-8">
          Comparing official NIRF rankings against research-based impact.
        </p>

        {/* Philosophy Section: Full width, smaller text (text-xs), #8cfdff border & shadow */}
        <div className="bg-white border-2 border-[#8cfdff] shadow-[0_4px_20px_rgba(140,253,255,0.4)] rounded-lg p-6 mb-10 w-full">
          <p className="text-xs text-slate-700 leading-relaxed mb-4">
            As a research student (PhD), you might be interested in finding a college that provides better research opportunities. While UnderGrads look for placements and NIRF rankings rightfully rank institutes, you should look at core competencies of professors. Because research is affected more by a guide than the institute (of course, the institute is definitely a big factor).
          </p>
          <p className="text-xs text-slate-700 leading-relaxed">
            Even prospective Masters students, if they want to pursue research beyond graduation, can also think the same. So do utilize <a href="https://csrankings.org" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-semibold underline hover:text-teal-900 transition-colors">CSRankings</a> for this.
          </p>
        </div>
        
        {/* Table Wrapper for mobile responsiveness */}
        <div className="w-full overflow-x-auto">
          <DataTable columns={columns} data={data} />
        </div>

        {/* Footnote: Exclusively using Times New Roman, spanning full width */}
        <footer className="mt-16 border-t pt-8 font-['Times_New_Roman',_Times,_serif] text-slate-700 space-y-5 w-full">
          <p className="text-base leading-relaxed">
            <strong>Methodology Note:</strong> Rankings derived from aggregated research output data (CSRankings). 
            NIRF rankings are based on official MoE publications. Delta represents the rank variance 
            between official metrics and research-based impact.
          </p>
          
          <p className="text-base leading-relaxed">
            <strong>Attribution:</strong> This project is made so India has better metrics to rank research (and not just infra. scale, acreage, placements, consultation opportunities, etc.). As a scientist, I would also like more faithful ways to acknowledge the efforts of national institutes towards science and not just govt. contracts and funding. So these rankings are to help you decide who creates scientific impact.
          </p>
          
          <p className="italic text-sm text-slate-500 pt-4">Data maintained by IRaRe Research Initiative.</p>
        </footer>
      </main>
    </div>
  );
}
