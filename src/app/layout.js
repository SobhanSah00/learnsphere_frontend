import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LearnSphere API Docs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          {/* Fixed Sidebar */}
          <div className="fixed top-0 left-0 h-full w-64 z-50">
            <Sidebar />
          </div>

          {/* Main content with left margin to match sidebar width */}
          <main className="ml-64 flex-1 overflow-y-auto p-8 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
