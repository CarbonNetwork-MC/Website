import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "./src/css/fonts.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

import Sidebar from "./src/components/Navigation/Sidebar";
import Footer from "./src/components/Navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon Network",
  description: "Carbon Network is a Minecraft Server Network that focuses on providing a fun and engaging experience for",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full bg-gray-100 gradient-background">
        <div className="mx-auto flex gap-4 min-h-screen max-w-9xl my-8 px-6">
          <Sidebar />

          <main className="flex-1">
            {children}

            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
