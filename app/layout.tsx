import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// Load Open Sans from Google Fonts
const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans"
});

export const metadata: Metadata = {
  title: "IRaRe | India Research Rankings",
  description: "Comparing official NIRF rankings against research-based impact.",
  // This adds the 🎓 emoji to the browser tab
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎓</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
