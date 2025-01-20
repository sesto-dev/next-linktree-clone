import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "My Linktree Clone",
  description:
    "A simple Linktree-like page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa" className={`antialiased ${vazirmatn.className}`}>
      <body>{children}</body>
    </html>
  );
}
