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
        src={"/assets/section-2/bgs.png"}
        alt="bg"
        width={1000}
        height={1000}
        className="h-full w-full"
      />

      <Image
        src={"/assets/section-2/about.png"}
        alt="fire"
        width={800}
        height={800}
        className="motion-preset-pulse-sm absolute left-1/2 top-[15vw] w-[15vw] -translate-x-1/2"
      />

      <div className="absolute left-[49%] top-[23vw] z-50 w-[38vw] -translate-x-1/2">
        <div className="absolute left-0 top-0 flex w-full px-[2vw]">
          <Image
            src={"/assets/section-2/stick-horizontal.png"}
            alt="stick-horizontal"
            width={1000}
            height={1000}
            className="h-auto w-[50%]"
          />

          <Image
            src={"/assets/section-2/stick-horizontal.png"}
            alt="stick-horizontal"
            width={1000}
            height={1000}
            className="h-auto w-[50%]"
          />
        </div>

        <div className="absolute bottom-0 left-0 top-0 flex h-full w-[2vw] flex-col">
          <Image
            src={"/assets/section-2/stick-vertical.png"}
            alt="stick-vertical"
            width={1000}
            height={1000}
            className="h-full w-auto"
          />

          <Image
            src={"/assets/section-2/stick-vertical.png"}
            alt="stick-vertical"
            width={1000}
            height={1000}
            className="h-full w-auto"
          />
        </div>

        <div className="absolute bottom-0 right-0 top-0 flex h-full w-[2vw] flex-col">
          <Image
            src={"/assets/section-2/stick-vertical.png"}
            alt="stick-vertical"
            width={1000}
            height={1000}
            className="h-full w-auto"
          />

          <Image
            src={"/assets/section-2/stick-vertical.png"}
            alt="stick-vertical"
            width={1000}
            height={1000}
            className="h-full w-auto"
          />
        </div>

        <div className="absolute bottom-0 left-0 flex w-full px-[2vw]">
          <Image
            src={"/assets/section-2/stick-horizontal.png"}
            alt="stick-horizontal"
            width={1000}
            height={1000}
            className="h-auto w-[50%]"
          />

          <Image
            src={"/assets/section-2/stick-horizontal.png"}
            alt="stick-horizontal"
            width={1000}
            height={1000}
            className="h-auto w-[50%]"
          />
        </div>

        <p className="px-[3vw] pb-[5vw] pt-[6vw] text-center text-[1vw] font-bold">
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
          <br />
          <br />
          我不仅是火焰之龙，我是史矛革，是人生旅途中的伙伴。
          <br />
          我的火焰不焚烧，而是为同行者照亮前路！
          <br />
          携手并进，志存高远，信任相连。我点燃梦想，证明真正的力量源于羁绊。人生战斗虽激烈，但有友情同行，我们将燃烧得更耀眼！
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
        className="absolute left-[4%] top-[46%] z-50 w-[35vw]"
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
        className="motion-preset-stretch absolute bottom-[17%] right-[28%] z-50 w-[15vw]"
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
