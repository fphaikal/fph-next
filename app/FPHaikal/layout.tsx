import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "FPHaikal | Personal Website",
  description: "FPHaikal's personal website",
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
