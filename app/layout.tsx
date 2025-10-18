import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UK Property Letting Platform",
  description: "A comprehensive property letting platform for the UK market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
