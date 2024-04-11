import { useState } from "react";
import Link from "next/link";

export default function FooterUp() {
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  return (
    <footer className="bg-[#1a1a1a] py-[30px]  font-sans">
      <div className="max-w-[1280px] mx-auto px-[15px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Liquidity</h3>
            <hr className="border-[#ffffff] mb-4" />
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link
                  href="https://cal.com/powerinotc/15min"
                  className="text-[#FFFFFF]"
                >
                  Deploy a proxy
                </Link>
              </li>
              <li>
                <Link
                  href="https://cal.com/powerinotc/15min"
                  className="text-[#FFFFFF]"
                >
                  Join the MM Swarm
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/PowerInOTC/Symphony"
                  className="text-[#FFFFFF]"
                >
                  Retail Runable Bot
                </Link>
              </li>
              {/* Add remaining company info links */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Protocoles & Influencers
            </h3>
            <hr className="border-[#FFFFFF] mb-4" />
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link
                  href="https://tripetto.app/run/RTOOTZYNR6"
                  className="text-[#FFFFFF]"
                >
                  Deploy your own Trading Plateforme
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.pio.finance/presale"
                  className="text-[#FFFFFF]"
                >
                  Join the Presale
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/PowerInOTC/pioner-typescript-sdk"
                  className="text-[#FFFFFF]"
                >
                  SDK
                </Link>
              </li>
              {/* Add remaining news and events links */}
            </ul>
          </div>
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Developpers
              </h3>
              <hr className="border-[#FFFFFF] mb-4" />
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link
                    href="https://developer.pio.finance/"
                    className="text-[#FFFFFF]"
                  >
                    Technical Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://cal.com/powerinotc/15min"
                    className="text-[#FFFFFF]"
                  >
                    Deploy a Whitelabel Exchange
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://powerinotc.notion.site/Job-Board-2780f935ca334189ad96166115ad6917?pvs=4"
                    className="text-[#FFFFFF]"
                  >
                    Get Pay To Develop Open Source
                  </Link>
                </li>

                {/* Add remaining popular links */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <Link
            href={
              subscribed
                ? "https://discord.gg/GJV2JdZTFc"
                : "https://discord.gg/GJV2JdZTFc"
            }
            className="bg-[#EBCB88] text-[#1a1a1a] font-semibold py-1 px-2 hover:bg-[#d9b772] transition-colors duration-300"
          >
            {subscribed ? "Join Discord" : "Join Discord"}
          </Link>
          <div className="flex items-center space-x-4 text-[12px]">
            <span className="text-[#EBCB88]">Follow PowerInOTC</span>
            <Link
              href="https://twitter.com/PowerInOTC"
              className="text-[#EBCB88]"
            >
              <img src="/images/X_icon_2.svg   " alt="X" className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/PowerInOTC"
              className="text-[#EBCB88]"
            >
              <img
                src="/images/104577259-8ea22080-5659-11eb-8efe-43e03c3b490f.png"
                alt="Github"
                className="w-6 h-6"
              />
            </Link>
            <Link href="mailto:info@pio.finance" className="text-[#EBCB88]">
              <img
                src="/images/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
                alt="Contact"
                className="w-8 h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
