import Image from "next/image";

export default function DivergencePost() {
  return (
    <article className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">The 2026 Divergence</h1>
      
      <p className="mb-6 leading-relaxed">
        If we look at the historical correlation between NIRF rankings and global research impact metrics like CSRankings, the data paints a picture of instability. 
      </p>

      {/* Adding the image with a nice border and shadow */}
      <div className="my-8 border rounded-lg overflow-hidden shadow-sm">
        <Image 
          src="/insights/divergence-rankings/corrgraph.png" 
          alt="Historical Ranking Correlation Chart" 
          width={800} 
          height={400} 
          className="w-full h-auto"
        />
        <p className="text-xs text-slate-500 p-3 bg-slate-50 border-t">
          Fig 1: Historical correlation trend between NIRF and CSRankings[cite: 1].
        </p>
      </div>

      <p className="leading-relaxed">
        As shown in the graph, the Spearman Rho correlation has fluctuated significantly since 2016...
      </p>
    </article>
  );
}
