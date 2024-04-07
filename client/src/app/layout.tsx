import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { Footer } from "@/features/layout/Footer";
import { Providers } from "@/utils/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Conversation Partner",
  description: "Practice a new language with an AI partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <body
        className={clsx(
          inter.className,
          "bg-base-300 flex flex-col justify-center items-center min-h-dvh"
        )}
      >
        <main className="flex-grow w-full max-w-screen-xl bg-base-100">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
