"use client"

import PageLayout from '../components/Layout/PageLayout';
import { useRef, useEffect, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Signal() {

    const container = useRef();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
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
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        },
        []
    );


    return (
        <PageLayout>
            <div className="w-4/5 mx-auto">
                <p className="mt-10 mb-9">
                    Disclaimer: Despite the meticulous nature of our trading analysis, it&lsquo;s imperative to understand that trading signals are not infallible, and their accuracy cannot be guaranteed at 100%. We explicitly absolve ourselves from any liability for losses incurred by users, emphasizing that the decision to act on signals is entirely at the owner&lsquo;s risk. This acknowledgment underscores the inherent unpredictability of financial markets, where past performance serves as a guide but does not assure future outcomes. Users are urged to exercise caution, recognizing the inherent uncertainties associated with trading decisions, and seek additional professional advice if needed.
                </p>
                <div className="flex mx-auto gap-2">
                    <div className="w-1/2">
                        <div className="h-52 bg-black text-white text-center flex flex-wrap flex-col content-center justify-center">
                            <h3>EUR/USD <span><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                            <div className="flex gap-1 text-md my-6">
                                <p>Sell: @1.0604</p>
                                <p>SL: @1.0607</p>
                                <p>TP: @1.0600</p>
                            </div>
                        </div>
                        <div className="h-52 bg-gray-300 p-8 flex flex-wrap flex-col content-center justify-center">
                            <p>Details: The details below contains information about the signal</p>
                            <p>Published: 03-January-2024</p>
                            <p>Time: 12:03am PST</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
                            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default memo(Signal)