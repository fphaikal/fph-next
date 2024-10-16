import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-monstserrat"
});

export const metadata: Metadata = {
  title: "FPHaikal | Naira Salima",
  description: "Personal Website of FPHaikal and Naira Salima", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`` }>
        {/* <Navbar /> */}
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
