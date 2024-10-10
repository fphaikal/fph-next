import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Naira Salima | Personal Website",
  description: "Naira Salima's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="w-full">{children}</main>
    </>
  );
}
