import Aos from "@/components/aos";
import Providers from "@/components/providers";
import { createClient } from "@/utils/supabase/server";
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
  const supabase = await createClient();
  const { data: configs } = await supabase.from("configs").select();

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
          <Providers config={configs?.[0] || null}>{children}</Providers>
        </body>
      </html>
    </>
  );
}
