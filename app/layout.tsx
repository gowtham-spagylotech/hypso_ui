import "./globals.css";
import { Inter } from "next/font/google";
import "@/public/styles/styles.scss";
import "@/public/styles/line-awesome.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hypso",
  description: "A nextjs template for online booking system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[var(--bg-1)] text-[var(--neutral-700)]`}>
        {children}
      </body>
    </html>
  );
}
