import { ChevronRight, Image } from "lucide-react";
import { Button } from "../ui/button";

export default function Join() {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="lg:max-w-[1280px] w-full mx-[auto] px-[15px]">
        <div className="relative md:py-[30px] md:pl-[140px] pb-[40px]">
          <div className="md:absolute top-0 left-0 md:w-[110px] md:h-[110px] w-[70px] h-[70px] md:mb-[0] mb-[30px]">
            <img src={`https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg`} alt="logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-[#000000] lg:text-[36px] lg:leading-[46px] sm:text-[28px] sm:leading-[38px] text-[20px] leading-[28px] font-bold">Neque porro quisquam est qui dolorem</h2>
          <div className="text-[#1A1A1A] md:mt-[15px] mt-[10px] lg:text-[22px] lg:leading-[32px] text-[16px] leading-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id semper felis. Duis sodales, sem in blandit cursus, ligula dui pretium justo, euismod tincidunt diam justo a lorem. <Button variant="link" className="text-[#1A1A1A] h-auto p-[0] font-bold lg:text-[22px] lg:leading-[32px] text-[16px] leading-[22px] inline-flex items-center hover:no-underline hover-btn">Join Now <ChevronRight className="text-[#1A1A1A] relative top-[1px] w-[20px]" /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}