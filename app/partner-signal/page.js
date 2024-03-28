"use client";

import { useEffect, useRef } from "react";

import NavDashboard from "@/components/NavDashboard";
import DashboardLayout from "../components/Layout/DashboardLayout";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const analysis = [
  {
    name: "Number of days traded",
    value: 3,
  },
  {
    name: "Total trade signals",
    value: 6,
  },
  {
    name: "Average trade signal per day",
    value: 0.2,
  },
  {
    name: "Overall trade success",
    value: "83.3%",
  },
  {
    name: "Biggest win",
    value: "75pips",
  },
  {
    name: "Biggest Loss",
    value: "31pips",
  },
];

const successRate = [
  {
    currency: "GBP/USD",
    rate: "/img/good.svg",
  },
  {
    currency: "USD/CAD",
    rate: "/img/good.svg",
  },
  {
    currency: "NZD/JPY",
    rate: "/img/bad.svg",
  },
  {
    currency: "EUR/USD",
    rate: "/img/good.svg",
  },
  {
    currency: "NZD/CAD",
    rate: "/img/good.svg",
  },
  {
    currency: "GBP/JPY",
    rate: "/img/good.svg",
  },
];

const PartnerSignalPage = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
            {
              "autosize": true,
              "symbol": "FX:EURUSD",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "light",
              "style": "1",
              "locale": "en",
              "enable_publishing": false,
              "allow_symbol_change": true,
            }`;
    container.current.appendChild(script);
  }, []);

  return (
    <DashboardLayout>
      <div className="px-5 py-8 md:px-20">
        <NavDashboard />
      </div>
      <div className="bg-black flex justify-end w-full py-2 px-5 md:px-20">
        <div>
          <button className="bg-[#E8EDF4] hover:bg-primary-green hover:text-white duration-300 text-black px-4 py-2 rounded-sm text-sm">
            Publish
          </button>
        </div>
      </div>

      <div className="py-10 px-5 md:px-20">
        <div>
          <div
            className="tradingview-widget-container"
            ref={container}
            style={{ height: "70vh", width: "100%" }}
          >
            <div
              className="tradingview-widget-container__widget"
              style={{ height: "calc(100% - 32px)", width: "100%" }}
            ></div>
          </div>
        </div>

        <div className="mt-10 flex gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-[25px] font-medium">Give a trade signal</h1>
            <p className="text-sm">
              Trade signals help you track your ability and success as a trader,
              putting you at the fore front of opportunities.
            </p>

            <div>
              <Select>
                <SelectTrigger className="w-full flex justify-center gap-2 bg-gray-shade-40">
                  <SelectValue placeholder="GBP/USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EUR/USD">EUR/USD</SelectItem>
                  <SelectItem value="USD/JPN">USD/JPN</SelectItem>
                  <SelectItem value="GBR/USD">GBR/USD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-10">
              <button className="w-full py-3 bg-gray-shade-40 rounded-lg hover:bg-primary-green hover:text-white duration-300">
                Buy
              </button>
              <button className="w-full py-3 bg-gray-shade-40 rounded-lg hover:bg-primary-green hover:text-white duration-300">
                Sell
              </button>
            </div>

            <div className="flex gap-10">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="stop-loss">Stop Loss</label>
                <input
                  type="text"
                  name="stop-loss"
                  id="stop-loss"
                  className="border border-solid border-gray-shade-40 w-full rounded-lg bg-white outline-primary-green p-2"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="take-profit">Take Profit</label>
                <input
                  type="text"
                  name="take-profit"
                  id="take-profit"
                  className="border border-solid border-gray-shade-40 w-full rounded-lg bg-white outline-primary-green p-2"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-medium">Account Analysis</h2>
              <div className="mt-5 flex flex-col gap-3">
                {analysis.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-end pb-4 border-b border-solid border-gray-shade-10"
                  >
                    <p>{item.name}</p>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-gray-shade-30 w-[40%]">
            <h1 className="text-lg text-black">Trade performance</h1>
            <div className="border-2 border-solid border-gray-shade-25 rounded-lg p-3 mt-3">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-3">
                  <h2 className="text-sm">Please note</h2>
                  <p className="text-[10px]">
                    This table helps you track your trade success. Be aware that
                    all users of this product can see your trade signals.
                  </p>

                  <div className="w-full h-2 rounded-lg bg-gray-shade-20">
                    <div className="w-20 bg-primary-green h-full rounded"></div>
                  </div>
                </div>

                <div>
                  <h2 className="text-black text-[16px]">Success Rate</h2>

                  <div className="mt-5 flex flex-col gap-6">
                    {successRate.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between pb-3 border-b border-solid border-gray-shade-40"
                      >
                        <p className="text-">{item.currency}</p>
                        <Image
                          src={item.rate}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                          alt="rate of success of the currency"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="my-4 flex flex-col gap-5">
                    <h3 className="text-sm">Overall Trade Success</h3>
                    <div className="flex justify-between items-center gap-5">
                      <p className="text-[10px]">
                        This feature helps the trader tracks overall trade
                        success.
                      </p>
                      <p className="text-2xl font-semibold">83.3%</p>
                    </div>

                    <div>
                      <Select>
                        <SelectTrigger className="w-full flex justify-center gap-2 bg-gray-shade-40">
                          <SelectValue placeholder="Lifetime" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EUR/USD">EUR/USD</SelectItem>
                          <SelectItem value="USD/JPN">USD/JPN</SelectItem>
                          <SelectItem value="GBR/USD">GBR/USD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PartnerSignalPage;
