import { Inter } from "next/font/google";
import "./globals.css";
import Welcome from "@/components/global/Welcome";
import TopLocationBar from "@/components/global/TobLocationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Electronic Store",
  description: "Generated by Best Electronic Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Welcome />
        <TopLocationBar />
        {children}
        </body>
    </html>
  );
}
