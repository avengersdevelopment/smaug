"use client";

import Image from "next/image";

export const Section2 = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={"/assets/section-2/divider.png"}
        alt="divider"
        width={1000}
        height={1000}
        className="absolute left-0 right-0 top-0 z-50 w-full"
      />

      <Image
        src={"/assets/section-2/bg.png"}
        alt="bg"
        width={1000}
        height={1000}
        className="h-full w-full"
      />

      <Image
        src={"/assets/section-2/about.png"}
        alt="about"
        width={1000}
        height={1000}
        className="absolute left-[50%] top-[15%] w-[50vw] -translate-x-1/2"
      />

      <Image
        src={"/assets/section-2/glue.png"}
        alt="glue"
        width={1000}
        height={1000}
        className="absolute left-0 top-[25%] w-[15vw]"
      />

      <Image
        src={"/assets/section-2/sleeping-smaug.gif"}
        alt="smaug-sleeping"
        width={1000}
        height={1000}
        className="absolute left-[4%] top-[40%] w-[40vw]"
      />

      <Image
        src={"/assets/section-2/fire.png"}
        alt="fire"
        width={1000}
        height={1000}
        className="absolute right-[12%] top-[25%] w-[10vw]"
      />

      <Image
        src={"/assets/section-2/egg.png"}
        alt="egg"
        width={1000}
        height={1000}
        className="absolute bottom-[20%] right-[28%] w-[15vw]"
      />

      <Image
        src={"/assets/section-2/clip.png"}
        alt="clip"
        width={1000}
        height={1000}
        className="absolute bottom-[25%] right-[10%] w-[8vw]"
      />
    </div>
  );
};
