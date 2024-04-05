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
            <hr className="border-[#EBCB88] mb-4" />
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/" className="text-[#EBCB88]">
                  Deploy a proxy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#EBCB88]">
                  Join the MM Swarm
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#EBCB88]">
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
            <hr className="border-[#EBCB88] mb-4" />
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/" className="text-[#EBCB88]">
                  Deploy your own Trading Plateforme
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#EBCB88]">
                  Join the Presale
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#EBCB88]">
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
              <hr className="border-[#EBCB88] mb-4" />
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link href="/" className="text-[#EBCB88]">
                    Technical Docs
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#EBCB88]">
                    Whitelabel Exchange
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#EBCB88]">
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
            href={subscribed ? "/" : "/"}
            className="bg-[#EBCB88] text-[#1a1a1a] font-semibold py-1 px-2 hover:bg-[#d9b772] transition-colors duration-300"
          >
            {subscribed ? "Manage Subscription" : "Sign Up for PIO News"}
          </Link>
          <div className="flex items-center space-x-4 text-[12px]">
            <span className="text-[#EBCB88]">Follow PowerInOTC</span>
            <Link
              href="https://twitter.com/PowerInOTC"
              className="text-[#EBCB88]"
            >
              <img src="/images/X_icon_2.svg   " alt="X" className="w-6 h-6" />
            </Link>
            <Link href="/" className="text-[#EBCB88]">
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
