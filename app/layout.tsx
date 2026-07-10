import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdurrahman Oriolowo | Frontend Developer",
  description:
    "Portfolio of Abdurrahman Oriolowo — Frontend Developer crafting polished, performant web interfaces.",
  openGraph: {
    title: "Abdurrahman Oriolowo | Frontend Developer",
    description:
      "Frontend Developer crafting polished, performant web interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
