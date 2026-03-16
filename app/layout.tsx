import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Load Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Abhishek Kumar Singh | GenAI & Full Stack Engineer",
  description: "Portfolio of Abhishek Kumar Singh, an experienced Software Development Engineer specializing in Full Stack Development, Node.js, Next.js, and GenAI solutions.",
  keywords: [
    "Full Stack Developer",
    "Software Development Engineer",
    "GenAI Engineer",
    "React.js Developer",
    "Node.js Developer",
    "Abhishek Kumar Singh",
    "Portfolio"
  ],
  authors: [{ name: "Abhishek Kumar Singh" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abhishek-portfolio.vercel.app",
    title: "Abhishek Kumar Singh | GenAI & Full Stack Engineer",
    description: "Experienced Software Development Engineer building scalable software, intelligent systems, and GenAI-powered digital experiences.",
    siteName: "Abhishek Kumar Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar Singh | GenAI & Full Stack Engineer",
    description: "Experienced Software Development Engineer building scalable software, intelligent systems, and GenAI-powered digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-blue-500/30 selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
