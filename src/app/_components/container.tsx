"use client";

import { Section1 } from "@/app/_components/section-1";
import { Section2 } from "@/app/_components/section-2";
import { Section3 } from "@/app/_components/section-3";

export default function Container() {
  return (
    <main className="relative h-full w-full">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
