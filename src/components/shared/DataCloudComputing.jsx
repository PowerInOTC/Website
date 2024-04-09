import Slider from "react-slick";
import { DataCloudComputingList } from "./helper";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DataCloudComputing() {
  const sliderRef = useRef(null);
  const eleLeftPosition = useRef(null);
  const [sliderLeftPosition, setSliderLeftPosition] = useState(null);
  const [sliderRightPosition, setSliderRightPosition] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [slides, setSlides] = useState(DataCloudComputingList);
  // const dataCloudComputingList = DataCloudComputingList;

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };
  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleCardClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const config = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    arrows: true,
    prevArrow: <SamplePrevArrow onClick={handlePrevSlide} />,
    nextArrow: <SampleNextArrow onClick={handleNextSlide} />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          autoplay: false,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 2561) {
        if (sliderRef && sliderRef.current) {
          if (sliderRef.current.innerSlider.list.children[0]) {
            const ele = sliderRef.current.innerSlider.list.children[0];
            setSliderLeftPosition(
              eleLeftPosition.current.getBoundingClientRect().left
            );
            ele.style.paddingLeft = `${sliderLeftPosition}px`;
          }

          if (
            sliderRef.current.innerSlider.list.offsetParent.childNodes[0] &&
            sliderRef.current.innerSlider.list.offsetParent.childNodes[2]
          ) {
            const elePrev =
              sliderRef.current.innerSlider.list.offsetParent.childNodes[0];
            const eleNext =
              sliderRef.current.innerSlider.list.offsetParent.childNodes[2];
            setSliderRightPosition(
              eleLeftPosition.current.getBoundingClientRect().right
            );
            elePrev.style.left = sliderRightPosition - 85 + "px";
            eleNext.style.left = sliderRightPosition - 45 + "px";
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sliderLeftPosition, sliderRightPosition]);

  useEffect(() => {
    const handleSlider = () => {
      setWindowWidth(window.innerWidth);
    };
    handleSlider();
    window.addEventListener("resize", handleSlider);
    return () => {
      window.removeEventListener("resize", handleSlider);
    };
  }, [windowWidth]);

  return (
    <div className="lg:py-[56px] py-[40px] overflow-hidden">
      <div
        className="lg:max-w-[1280px] w-full mx-[auto] px-[15px]"
        ref={eleLeftPosition}
      >
        <div className="flex items-center justify-between sm:mb-[30px] mb-[15px]">
          <h2 className="text-[#000000] lg:text-[36px] lg:leading-[46px] sm:text-[28px] sm:leading-[38px] text-[20px] leading-[28px] font-bold flex items-center flex-wrap">
            V2 Research
          </h2>
          {/* <div className="slider-arrow hidden items-center lg:flex">
            <button className={`flex items-center justify-center slick-arrow mr-[10px] `} onClick={handlePrevSlide}><ChevronLeft /></button>
            <button className={`flex items-center justify-center slick-arrow`} onClick={handleNextSlide}><ChevronRight /></button>  
          </div> */}
        </div>
      </div>
      <div className="my-[30px] md:hidden block px-[15px]">
        <p className="md:text-[22px] md:leading-[35px] text-[16px] leading-[28px] lg:mb-[30px] mb-[15px]">
          80% of OTC derivatives reside in TradFi, with IRDs dominating the
          landscape, contrasting sharply with the absence of IRDs in DeFi.
          America&apos;s financial essence lies not in consumer giants like
          Apple and Coca-Cola but in the Dollar and IRDs. The economy hinges on
          IRDs, and a single misstep, akin to the 2008 crisis, carries
          substantial repercussions. PIO V2 serves as the conduit, seamlessly
          transplanting TradFi&apos;s robust IRD risk infrastructure into DeFi,
          enabling the integration of IRDs into decentralized finance.
        </p>
        <Collapsible>
          <CollapsibleTrigger className="text-[#1a1a1a] md:text-[18px] text-[16px] leading-[22px] font-bold flex items-center collapsibleTrigger">
            Quick Links <ChevronDown className="relative top-[1px] ml-[10px]" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="flex flex-wrap -mx-[8px]">
              <li className="px-[8px] mt-[16px]">
                <Link
                  href={"/"}
                  className={
                    "text-[#1a1a1a] md:text-[18px] text-[16px] leading-[22px] font-bold flex items-center"
                  }
                >
                  Lorem ipsum{" "}
                  <ChevronRight className="relative top-[1px] ml-[10px] text-[12px]" />
                </Link>
              </li>
              <li className="px-[8px] mt-[16px]">
                <Link
                  href={"/"}
                  className={
                    "text-[#1a1a1a] md:text-[18px] text-[16px] leading-[22px] font-bold flex items-center"
                  }
                >
                  Lorem ipsum dolor sit amet{" "}
                  <ChevronRight className="relative top-[1px] ml-[ text-[12px]10px]" />
                </Link>
              </li>
              <li className="px-[8px] mt-[16px]">
                <Link
                  href={"/"}
                  className={
                    "text-[#1a1a1a] md:text-[18px] text-[16px] leading-[22px] font-bold flex items-center"
                  }
                >
                  Lorem ipsum dolor{" "}
                  <ChevronRight className="relative top-[1px] ml-[10px] text-[12px]" />
                </Link>
              </li>
              <li className="px-[8px] mt-[16px]">
                <Link
                  href={"/"}
                  className={
                    "text-[#1a1a1a] md:text-[18px] text-[16px] leading-[22px] font-bold flex items-center"
                  }
                >
                  Lorem ipsum dolor{" "}
                  <ChevronRight className="relative top-[1px] ml-[10px] text-[12px]" />
                </Link>
              </li>
              <li className="px-[8px] mt-[16px]">
                <Link
                  href={"/"}
                  className={
                    "text-[#1a1a1a] md:text-[18px] text-[16px] leading-[22px] font-bold flex items-center"
                  }
                >
                  Lorem ipsum{" "}
                  <ChevronRight className="relative top-[1px] ml-[10px] text-[12px]" />
                </Link>
              </li>
              <li className="px-[8px] mt-[16px]">
                <Link
                  href={"/"}
                  className={
                    "text-[#1a1a1a] md:text-[18px] text-[16px] leading-[22px] font-bold flex items-center"
                  }
                >
                  Lorem ipsum dolor sit{" "}
                  <ChevronRight className="relative top-[1px] ml-[10px] text-[12px]" />
                </Link>
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="max-w-1280">
        {windowWidth > 767 ? (
          <Slider
            {...config}
            className="equal-height slider-dots slider-arrow"
            ref={sliderRef}
          >
            <div className="lg:p-[15px] p-[10px] h-full">
              <div className="bg-white rounded-[4px] h-full overflow-hidden">
                <div className="">
                  <p className="xl:text-[20px] xl:leading-[24px] lg:text-[18px] lg:leading-[28px] text-[16px] leading-[28px] lg:mb-[30px] mb-[15px]">
                    80% of OTC derivatives reside in TradFi, with IRDs
                    dominating the landscape, contrasting sharply with the
                    absence of IRDs in DeFi. America&apos;s financial essence
                    lies not in consumer giants like Apple and Coca-Cola but in
                    the Dollar and IRDs. The economy hinges on IRDs, and a
                    single misstep, akin to the 2008 crisis, carries substantial
                    repercussions. PIO V2 serves as the conduit, seamlessly
                    transplanting TradFi&apos;s robust IRD risk infrastructure
                    into DeFi, enabling the integration of IRDs into
                    decentralized finance.
                  </p>
                  <Collapsible>
                    <CollapsibleTrigger className="text-[#1a1a1a] text-[18px] leading-[22px] font-bold flex items-center collapsibleTrigger">
                      Quick Links{" "}
                      <ChevronDown className="relative top-[1px] ml-[10px]" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="flex flex-wrap -mx-[8px]">
                        <li className="px-[8px] mt-[16px]">
                          <Link
                            href={"/"}
                            className={
                              "text-[#1a1a1a] text-[18px] leading-[22px] font-bold flex items-center hover-btn"
                            }
                          >
                            O(1) SIMM{" "}
                            <ChevronRight className="relative top-[1px] ml-[10px]" />
                          </Link>
                          <Link
                            href={"/"}
                            className={
                              "text-[#1a1a1a] text-[18px] leading-[22px] font-bold flex items-center hover-btn"
                            }
                          >
                            Netting{" "}
                            <ChevronRight className="relative top-[1px] ml-[10px]" />
                          </Link>
                          <Link
                            href={
                              "https://developer.pio.finance/data-room/whitepaper"
                            }
                            className={
                              "text-[#1a1a1a] text-[18px] leading-[22px] font-bold flex items-center hover-btn"
                            }
                          >
                            CCP Whitepaper{" "}
                            <ChevronRight className="relative top-[1px] ml-[10px]" />
                          </Link>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
            {slides.map((item, index) => (
              <div className="lg:p-[15px] p-[10px] h-full" key={index}>
                <div
                  className="bg-white rounded-[4px] h-full overflow-hidden shadow-[0_0_5px_0_rgba(0,0,0,.3)] cursor-pointer hover:shadow-[0_0_15px_0_rgba(0,0,0,.35)] ease-in duration-300"
                  onClick={() => handleCardClick(item.link)}
                >
                  <div className="h-[230px] w-full overflow-hidden">
                    <img
                      src={item.img_url}
                      alt="img"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-[20px]">
                    <p className="md:text-[15px] text-[14px] leading-[22px] font-bold lg:mb-[30px] mb-[15px]">
                      {item.tropic} | {item.type}
                    </p>
                    <p className="md:text-[20px] md:leading-[26px] text-[16px] leading-[22px]  font-bold lg:my-[30px] my-[15px]">
                      {item.title}
                    </p>
                    <p className="md:text-[15px] text-[14px] leading-[20px] text-[#1A1A1A]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <>
            <Slider
              {...config}
              className="equal-height slider-dots slider-arrow"
              ref={sliderRef}
            >
              {slides.map((item, index) => (
                <div className="lg:p-[15px] p-[10px] h-full" key={index}>
                  <div
                    className="bg-white rounded-[4px] h-full overflow-hidden shadow-[0_0_5px_0_rgba(0,0,0,.3)] cursor-pointer hover:shadow-[0_0_15px_0_rgba(0,0,0,.35)] ease-in duration-300"
                    onClick={() => handleCardClick(item.link)}
                  >
                    <div className="h-[230px] w-full overflow-hidden">
                      <img
                        src={item.img_url}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-[20px]">
                      <p className="md:text-[15px] text-[14px] leading-[22px] font-bold lg:mb-[30px] mb-[15px]">
                        {item.tropic} | {item.type}
                      </p>
                      <p className="md:text-[20px] md:leading-[26px] text-[16px] leading-[22px]  font-bold lg:my-[30px] my-[15px]">
                        {item.title}
                      </p>
                      <p className="md:text-[15px] text-[14px] leading-[20px] text-[#1A1A1A]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <ChevronLeft />
    </button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <ChevronRight />
    </button>
  );
}
