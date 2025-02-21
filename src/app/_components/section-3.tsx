"use client";

import Image from "next/image";

export const Section3 = () => {
  return (
    <div className="relative h-full w-full -mt-[22%] -z-10">
      <Image
        src={"/assets/section-3/bg.png"}
        alt="bg"
        width={1000}
        height={1000}
        className="h-full w-full"
      />

      <Image
        src={"/assets/section-3/lightning.png"}
        alt="lightning"
        width={1000}
        height={1000}
        className="absolute left-0 bottom-[20%] w-[58vw]"
      />

      <Image
        src={"/assets/section-3/smaug.png"}
        alt="smaug"
        width={1000}
        height={1000}
        className="absolute right-[5%] bottom-[1%] w-[40vw]"
      />
    </div>
  );
};
