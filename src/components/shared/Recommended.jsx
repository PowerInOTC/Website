import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import Slider from "react-slick";
import { RecommendedList } from "./helper";
import { useEffect, useRef, useState } from "react";
import SettingDialog from "./SettingDialog";

export default function Recommended() {
  const sliderRef = useRef(null);
  const eleLeftPosition = useRef(null);
  const [sliderLeftPosition, setSliderLeftPosition] = useState(null);
  const [sliderRightPosition, setSliderRightPosition] = useState(null);
  const recommendedList = RecommendedList;

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  }
  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow onClick={handlePrevSlide} />,
    nextArrow: <SampleNextArrow onClick={handleNextSlide} />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          slidesToShow: 2.3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 2561) {
        if(sliderRef && sliderRef.current) {
          if(sliderRef.current.innerSlider.list.children[0]) {
            const ele = sliderRef.current.innerSlider.list.children[0];
            setSliderLeftPosition(eleLeftPosition.current.getBoundingClientRect().left);
            ele.style.paddingLeft = `${sliderLeftPosition}px`;
          }

          if(sliderRef.current.innerSlider.list.offsetParent.childNodes[0] && sliderRef.current.innerSlider.list.offsetParent.childNodes[2]) {
            const elePrev = sliderRef.current.innerSlider.list.offsetParent.childNodes[0];
            const eleNext = sliderRef.current.innerSlider.list.offsetParent.childNodes[2];
            setSliderRightPosition(eleLeftPosition.current.getBoundingClientRect().right);
            elePrev.style.left = (sliderRightPosition - 85) + 'px';
            eleNext.style.left = (sliderRightPosition - 45) + 'px';
          }
        }
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, [sliderLeftPosition]);


  return (
    <div className="bg-[#1a1a1a] lg:py-[56px] py-[40px]">
      <div className="lg:max-w-[1280px] w-full mx-[auto] px-[15px]" ref={eleLeftPosition}>
        <div className="flex items-center justify-between sm:mb-[30px] mb-[15px]">
          <h2 className="text-[#ffffff] lg:text-[36px] lg:leading-[46px] sm:text-[28px] sm:leading-[38px] text-[20px] leading-[28px] font-bold flex items-center flex-wrap">Recommended For You <SettingDialog /> </h2>
          {/* <div className="slider-arrow hidden items-center lg:flex">
            <button className={`flex items-center justify-center slick-arrow mr-[10px] ${sliderDisabledButton && 'slick-disabled'}`} onClick={handlePrevSlide}><ChevronLeft /></button>
            <button className={`flex items-center justify-center slick-arrow ${sliderDisabledButton && 'slick-disabled'}`} onClick={handleNextSlide}><ChevronRight /></button>  
          </div> */}
        </div>
      </div>
      <div className="max-w-1280">    
        <Slider {...settings} className="equal-height slider-dots slider-arrow" ref={sliderRef}>
          {
            recommendedList.map((item, index) => (
              <div className="lg:p-[15px] p-[10px] h-full"  key={index}>
                <div className="bg-white rounded-[4px] h-full overflow-hidden cursor-pointer">
                  <div className="h-[169px] w-full overflow-hidden">
                    <img src={item.img_url} alt="img" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-[15px]">
                    <p className="text-[11px] leading-[14px] font-bold">{item.tropic} | {item.type}</p>
                    <p className="text-[15px] leading-[18px] font-bold mt-[8px] line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClick}
    ><ChevronLeft /></button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClick}
    ><ChevronRight /></button>
  );
}