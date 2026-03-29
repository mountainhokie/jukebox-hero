import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jukebox Hero",
  description: "Media Player for multiple sources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-0 bg-gray-200">
            <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto pl-16 lg:pl-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
