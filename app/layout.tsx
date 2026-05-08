import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jibonge | Online Therapy",
  description: "Your safe space for mental wellness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sage-50 text-sage-900`}>{children}</body>
    </html>
  );
}
