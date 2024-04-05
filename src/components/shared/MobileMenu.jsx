import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileMenu({ openMenu, MenuRef }) {
  return (
    <>
      {openMenu && (
        <div className="fixed top-[45px] inset-x-0 inset-y-0 w-full h-full bg-[#000000] z-[51] opacity-[0.5]"></div>
      )}
      <div
        className={`fixed top-[45px] w-[300px] bg-[#FFFFFF] z-[51] inset-y-0 h-full overflow-auto transition ${
          openMenu ? "left-[0]" : "-left-[100%]"
        } `}
        ref={MenuRef}
      >
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="products" className="accordion-item">
              <AccordionTrigger className="px-[15px] py-[10px] hover:no-underline font-normal text-[#666666] text-[16px]">
                Products
              </AccordionTrigger>
              <AccordionContent className="pt-[10px] px-[30px] bg-[#EEEEEE]">
                <div className="pt-[15px]">
                  <div className="text-[#1a1a1a] text-[14px] leading-[17px] font-bold pb-[10px] mb-[7px] border-b border-b-[#cccccc]">
                    Lorem ipsum dolor
                  </div>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                </div>
                <div className="pt-[15px]">
                  <div className="text-[#1a1a1a] text-[14px] leading-[17px] font-bold pb-[10px] mb-[7px] border-b border-b-[#cccccc]">
                    Lorem ipsum dolor
                  </div>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="forYou" className="accordion-item">
              <AccordionTrigger className="px-[15px] py-[10px] hover:no-underline font-normal text-[#666666] text-[16px]">
                For You
              </AccordionTrigger>
              <AccordionContent className="pt-[10px] px-[30px] bg-[#EEEEEE]">
                <div className="pt-[15px]">
                  <div className="text-[#1a1a1a] text-[14px] leading-[17px] font-bold pb-[10px] mb-[7px] border-b border-b-[#cccccc]">
                    Lorem ipsum dolor
                  </div>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
                  >
                    Lorem ipsum dolor
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <Link
              href={"/"}
              className="block px-[15px] py-[10px] hover:no-underline font-normal text-[#666666] text-[16px] border-b border-b-[#eee"
            >
              Lorem ipsum dolor
            </Link>
          </Accordion>
        </div>
      </div>
    </>
  );
}
