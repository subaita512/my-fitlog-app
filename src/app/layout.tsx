import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Fit Log",
  description: "Track your workouts and build your best self.",
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