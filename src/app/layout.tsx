import Aos from "@/components/aos";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const handwriting = localFont({
  src: [
    {
      path: "../../public/fonts/handwriting.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/handwriting.ttf",
      weight: "700",
    },
  ],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "SMAUG",
  description: "I'm the fire you don't see coming!",
  openGraph: {
    title: "SMAUG",
    description: "I'm the fire you don't see coming!",
    url: "/",
    images: [
      {
        url: "/banner.webp",
        alt: "App Preview",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Aos />
      <html lang="en" className="relative">
        <body
          className={twMerge(
            handwriting.variable,
            "font-handwriting antialiased",
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
