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

      <div className="absolute left-[49%] top-[23vw] z-50 h-8 w-[38vw] -translate-x-1/2">
        <p className="text-center text-[1vw] font-bold">
          I&apos;m not just a dragon of fire, I&apos;m Smaug, a companion in the
          journey of life.
          <br />
          <br />
          My flames don&apos;t scorch... they light the way for those who walk
          beside me!
          <br />
          <br />
          Together, we rise, fueled by ambition and bound by trust. I ignite the
          dreams of those who dare to join me, and with every spark, I prove
          that the greatest strength lies in the bonds we share. Life&apos;s
          battles may be fierce, but with friendship in our hearts, we burn
          brighter together.
        </p>
      </div>

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
        className="motion-preset-pulse absolute right-[12%] top-[25%] w-[10vw]"
      />

      <Image
        src={"/assets/section-2/egg.png"}
        alt="egg"
        width={1000}
        height={1000}
        className="motion-preset-stretch absolute bottom-[20%] right-[28%] w-[15vw]"
      />

      <Image
        src={"/assets/section-2/clip.png"}
        alt="clip"
        width={1000}
        height={1000}
        className="motion-preset-oscillate absolute bottom-[25%] right-[10%] w-[8vw]"
      />
    </div>
  );
};
