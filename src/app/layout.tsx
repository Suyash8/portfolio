import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suyash Sharma - Next.js & Web3 Developer Portfolio",
  description:
    "Full Stack Next.js and Web3 Developer specializing in building modern web applications and blockchain integrations.",
  // "Explore my portfolio, highlighting my skills and services as a Full Stack Developer specializing in Next.js and Web3. Get in touch to discuss how I can help with your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-background text-foreground dark`}
      >
        {children}
      </body>
    </html>
  );
}
