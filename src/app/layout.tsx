import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import NavBar from "@/components/navbar";

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
      <body className={`bg-background text-foreground dark`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
