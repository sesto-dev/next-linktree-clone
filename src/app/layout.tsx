import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "گروه هنریا و Taranet",
  description: "فعال در بازار های مالی و تکنولوژی",
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
