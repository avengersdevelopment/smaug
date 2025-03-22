"use client";

import { ConfigProvider } from "@/store/config";
import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const config = {
    x_coin_url: "https://x.com/coin",
    buy_url: "https://coin.com/buy",
    telegram_url: "https://t.me/coin",
    chart_url: "https://coin.com/chart",
  };

  return (
    <>
      <ConfigProvider config={config}>
        <AppProgressBar
          height="4px"
          color={"#000000"}
          options={{ showSpinner: false }}
          shallowRouting
        />
        {children}
      </ConfigProvider>
    </>
  );
}
