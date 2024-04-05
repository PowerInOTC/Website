import Image from "next/image";
import LogoImg from "../../../public/images/logo.svg";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DropdownItemGroup from "./DropdownItemGroup";
import MobileMenu from "./MobileMenu";
import { Button } from "../ui/button";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [solutionDropdown, setSolutionDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const solutionRef = useRef(null);
  const industriesRef = useRef(null);
  const MenuRef = useRef(null);
  const BarIconRef = useRef(null);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleSolutionDropdown = () => {
    setSolutionDropdown(!solutionDropdown);
  };
  const handleIndustriesDropdown = () => {
    setIndustriesDropdown(!industriesDropdown);
  };

  useEffect(() => {
    const handleCloseDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
      if (solutionRef.current && !solutionRef.current.contains(event.target)) {
        setSolutionDropdown(false);
      }
      if (
        industriesRef.current &&
        !industriesRef.current.contains(event.target)
      ) {
        setIndustriesDropdown(false);
      }
    };
    document.addEventListener("click", handleCloseDropdown);
    return () => {
      document.removeEventListener("click", handleCloseDropdown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        MenuRef.current &&
        !MenuRef.current.contains(event.target) &&
        !BarIconRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed h-[45px] w-full flex items-center justify-center flex-col inset-x-0 top-0 z-50 bg-[#FFFFFF] border-b border-b-[#f7f7f7]">
        <div className="lg:max-w-[1280px] w-full mx-[auto] px-[15px] flex items-center lg:justify-start">
          <div className="px-[8px] flex items-center lg:hidden">
            <Link
              href={"/"}
              className="inline-block text-[#666666]"
              onClick={handleOpenMenu}
              ref={BarIconRef}
            >
              <Menu size={20} />
            </Link>
          </div>
          <div className="lg:mr-[10px] w-[100px] mx-auto">
            <Image src={LogoImg} alt="logo" className="w-[80px]" />
          </div>

          <div
            className={`flex-1 w-full lg:h-auto top-[45px] bg-[#ffffff] lg:block hidden`}
          >
            <ul className="lg:flex">
              <li className="dropdownWrapper">
                <Button
                  type="button"
                  variant="link"
                  className={`relative block h-auto lg:px-[8px] px-[15px] py-[10px] text-[16px] text-[#666666] hover:text-[#1a1a1a] hover:no-underline font-normal dropdownLabel ${
                    openDropdown && "active"
                  }`}
                  onClick={handleOpenDropdown}
                  ref={dropdownRef}
                >
                  Products
                </Button>
                <div
                  className={`w-full bg-[#eeeeee] border-[0] rounded-[0] px-[0] py-[20px] fixed top-[45px] left-0 dropdownMenuWrapper ${
                    openDropdown ? "block" : "hidden"
                  }`}
                  id="Products"
                >
                  <div className="lg:max-w-[1280px] px-[15px] w-full mx-[auto]">
                    <div className="flex mx-[-8px]">
                      <div className="w-1/6 px-[8px]">
                        <DropdownItemGroup />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/"
                  className="block lg:px-[8px] px-[15px] py-[10px] text-[16px] text-[#666666] hover:text-[#1a1a1a]"
                >
                  For You
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <MobileMenu openMenu={openMenu} MenuRef={MenuRef} />
    </>
  );
}
