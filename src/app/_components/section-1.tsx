"use client";

import { useConfig } from "@/store/config";
import Image from "next/image";
import Link from "next/link";

export const Section1 = () => {
  const xCoinUrl = useConfig()((state) => state.config?.x_coin_url);
  const buyUrl = useConfig()((state) => state.config?.buy_url);
  const telegramUrl = useConfig()((state) => state.config?.telegram_url);
  const chartUrl = useConfig()((state) => state.config?.chart_url);

  return (
    <div className="relative h-full w-full">
      <Image
        src={"/assets/section-1/header-bg.png"}
        alt="header-bg"
        width={1000}
        height={1000}
        className="absolute left-0 right-0 top-0 z-40 w-full"
      />

      <Image
        src={"/assets/section-1/header-icon.png"}
        alt="header-icon"
        width={480}
        height={480}
        className="absolute left-[10%] top-[2%] z-50 w-[5vw]"
      />

      <div className="absolute right-[10%] top-[3%] z-50 flex gap-4">
        <Link href={xCoinUrl || ""} target="_blank">
          <Image
            src={"/assets/section-1/x.png"}
            alt="x"
            width={480}
            height={480}
            className="h-auto w-[4vw] hover:animate-shake"
          />
        </Link>

        <Link href={telegramUrl || ""} target="_blank">
          <Image
            src={"/assets/section-1/telegram.png"}
            alt="telegram"
            width={480}
            height={480}
            className="h-auto w-[3.8vw] hover:animate-shake"
          />
        </Link>

        <Link href={buyUrl || ""} target="_blank">
          <Image
            src={"/assets/section-1/pumpfun.png"}
            alt="buy"
            width={480}
            height={480}
            className="h-auto w-[4vw] hover:animate-shake"
          />
        </Link>

        <Link href={chartUrl || ""} target="_blank">
          <Image
            src={"/assets/section-1/chart.png"}
            alt="chart"
            width={480}
            height={480}
            className="h-auto w-[4vw] hover:animate-shake"
          />
        </Link>
      </div>

      <Image
        src={"/assets/section-1/bg.png"}
        alt="bg"
        width={1000}
        height={1000}
        className="h-full w-full"
      />

      <Image
        src={"/assets/section-1/foreground.png"}
        alt="bg"
        width={1000}
        height={1000}
        className="absolute -bottom-[10%] left-0 right-0 z-40 w-full"
      />

      <Image
        src={"/assets/section-1/sun.png"}
        alt="logo"
        width={1000}
        height={1000}
        className="absolute left-[50%] top-0 w-[25vw] -translate-x-1/2"
      />

      <Image
        src={"/assets/section-1/title.png"}
        alt="title"
        width={1000}
        height={1000}
        className="absolute left-[18%] top-[10%] h-auto w-[30vw]"
      />

      <Image
        src={"/assets/section-1/smaug-stick.png"}
        alt="smaug-stick"
        width={1000}
        height={1000}
        className="absolute right-[15%] top-[5%] z-30 w-[30vw]"
      />

      <Image
        src={"/assets/section-1/butterfly-1.png"}
        alt="butterfly-1"
        width={480}
        height={480}
        className="absolute bottom-[40%] left-[4%] w-[6vw]"
      />

      <Image
        src={"/assets/section-1/butterfly-2.png"}
        alt="butterfly-2"
        width={480}
        height={480}
        className="absolute bottom-[45%] right-[10%] w-[6vw]"
      />

      <Image
        src={"/assets/section-1/bee.png"}
        alt="bee"
        width={480}
        height={480}
        className="absolute bottom-[45%] left-[45%] w-[7vw]"
      />
    </div>
  );
};
