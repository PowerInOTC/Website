import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CircleX } from "lucide-react";

export default function Information() {
  const [openInfoMenu, setOpenInfoMenu] = useState(true);
  const handleOpenInfoMenu = () => {
    setOpenInfoMenu(false);
  };
  return (
    <>
      {openInfoMenu && (
        <div className="bg-[#EBCB88] py-[8px] sticky inset-x-0 top-[45px] z-[49] w-full">
          <div className="lg:max-w-[1280px] mx-[auto] px-[15px]">
            <div className="relative pr-[50px]">
              <div className="flex items-center justify-center">
                <p className="text-[#1a1a1a] md:text-[16px] text-[14px]">
                  Testnet Milestone Presale Whitelist is Live.
                </p>
                <Button
                  variant="primary"
                  className="bg-[#1a1a1a] text-[#FFFFFF] rounded-[0] ml-[10px] text-[12px] px-[12px] py-[6px] h-[auto] hover:opacity-[0.8]"
                >
                  Join Now
                </Button>
              </div>
              <Link
                href={"/"}
                onClick={handleOpenInfoMenu}
                className="block absolute top-[50%] right-0 translate-y-[-50%] lg:px-[8px] px-[8px]"
              >
                <CircleX size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
