import Link from "next/link";

export default function AnalysisHub() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="bg-slate-50 border border-slate-200 p-8 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">The 2026 Divergence</h1>
        <p className="text-slate-600 mb-6 max-w-2xl">
          Why NIRF methodologies are decoupling from research impact metrics, and what it means for the future of Indian academia.
        </p>
        <Link 
          href="/insights/divergence-ranking" 
          className="bg-[#00f4cf] px-6 py-2 rounded font-bold hover:opacity-90 inline-block transition-opacity"
        >
          Read More &rarr;
        </Link>
      </section>

      {/* Grid Archive */}
      <h2 className="text-2xl font-bold mb-6">Archive</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Active Link to your main insight */}
        <Link href="/insights/divergence-ranking" className="border p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="font-bold text-xl">Divergence Ranking</h3>
          <p className="text-sm text-slate-500 mt-2">Historical analysis of NIRF vs CS Rank alignment.</p>
        </Link>

        {/* Placeholder for future insights */}
        <div className="border p-6 rounded-lg opacity-60 bg-slate-50">
          <h3 className="font-bold text-xl">DBLP Analysis</h3>
          <p className="text-sm text-slate-500 mt-2">A look at publication trends over the last decade. (Coming Soon)</p>
        </div>
      </div>
    </div>
  );
}
