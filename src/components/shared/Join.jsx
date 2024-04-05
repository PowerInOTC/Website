import { ChevronRight, Image } from "lucide-react";
import { Button } from "../ui/button";

export default function Join() {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="lg:max-w-[1280px] w-full mx-[auto] px-[15px]">
        <div className="relative md:py-[30px] md:pl-[140px] pb-[40px]">
          <div className="md:absolute top-0 left-0 md:w-[110px] md:h-[110px] w-[70px] h-[70px] md:mb-[0] mb-[30px]">
            <img
              src={`/images/Frame 1171275918.png`}
              alt="PIO"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-[#000000] lg:text-[36px] lg:leading-[46px] sm:text-[28px] sm:leading-[38px] text-[20px] leading-[28px] font-bold">
            V1 OTC Proxy Transform Derivatives CeFi into DeFi
          </h2>
          <div className="text-[#1A1A1A] md:mt-[15px] mt-[10px] lg:text-[22px] lg:leading-[32px] text-[16px] leading-[22px]">
            Experience decentralized derivatives with CeFi UX, 1600 Liquid
            Pairs, sub 1 second execution time, up to 500x leverage and self
            custodial{" "}
            <Button
              variant="link"
              className="text-[#1A1A1A] h-auto p-[0] font-bold lg:text-[22px] lg:leading-[32px] text-[16px] leading-[22px] inline-flex items-center hover:no-underline hover-btn"
            >
              Join Now{" "}
              <ChevronRight className="text-[#1A1A1A] relative top-[1px] w-[20px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
