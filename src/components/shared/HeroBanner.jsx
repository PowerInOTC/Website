import Image from "next/image";
import { Button } from "../ui/button";
import Slider from "react-slick";
import { HeroBannerList } from "./helper";

export default function HeroBanner() {
  const heroBannerList = HeroBannerList;
  const heroSettings = {
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    dotsClass:
      "slick-dots xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[650px] w-full mx-[auto] left-0 right-0 px-[12px]",
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    appendDots: (dots) => (
      <div>
        <ul className="slick-thumb"> {dots} </ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <Button
          type="button"
          variant="ghost"
          className="hover:bg-[transparent] cursor-pointer"
        >
          <span className="h-[4px] w-full block lg:mb-[15px] progress-wrap"></span>
          <span className="text-[#999999] text-[11px] leading-[15px] font-bold lg:block mb-[10px] hidden">
            {heroBannerList[i].tropic}
          </span>
          <div className="lg:block hidden">
            <span className="text-[#999999] text-[14px] leading-[22px] font-normal line-clamp-2">
              {heroBannerList[i].buttonDescription}
            </span>
          </div>
        </Button>
      );
    },
  };
  return (
    <div className="hero-slider-wrapper">
      <Slider {...heroSettings} className="equal-height">
        {heroBannerList.map((item, index) => {
          return (
            <div className="bg-[#000000] h-full" key={index}>
              <div className="xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[650px] w-full mx-[auto] px-[15px] lg:pb-[150px] lg:pt-[100px] pt-[30px] pb-[50px]">
                <div className="md:flex md:gap-[30px]">
                  <div className="lg:w-[630px] md:w-[380px]">
                    <div className="lg:text-[24px] lg:leading-[34px] text-[18px] leading-[22px] font-bold text-[#FFFFFF] lg:mb-[20px] mb-[8px]">
                      {item.tropic}
                    </div>
                    <h2 className="lg:text-[48px] lg:leading-[58px] text-[28px] leading-[35px] font-bold text-[#FFFFFF] lg:mb-[20px] mb-[8px]">
                      {item.title}
                    </h2>
                    <p className="lg:text-[22px] lg:leading-[32px] text-[18px] leading-[30px] text-[#FFFFFF] lg:mb-[40px] mb-[20px]">
                      {item.description}
                    </p>
                    <Button
                      variant="default"
                      className="bg-[#EBCB88] text-[#000000] font-bold lg:text-[18px] lg:px-[15px] lg:py-[13px] text-[14px] px-[12px] py-[9px] rounded-[0] h-[auto] hover:bg-[#EBCB88] hover:opacity-[0.8]"
                      onClick={() => (window.location.href = item.link)}
                    >
                      {item.buttonText}
                    </Button>
                  </div>
                  <div className="lg:w-[calc(100%_-_630px)] md:w-[calc(100%_-_380px)] mt-[30px]">
                    <img
                      src={item.img_url}
                      alt="logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
