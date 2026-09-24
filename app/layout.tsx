import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How Does the Internet Work? | Interactive Learning",
  description: "An interactive journey through the Internet for students - Learn how data travels across the world!",
  keywords: [
    "internet education",
    "how internet works",
    "networking for students",
    "interactive learning",
    "Class 9 computer science",
    "DNS",
    "IP address",
    "packets",
    "encryption",
  ],
  authors: [{ name: "Educational Platform" }],
  openGraph: {
    title: "How Does the Internet Work?",
    description: "An interactive educational experience for students to learn about the Internet",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
