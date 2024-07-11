"use client";
import Image from "next/image";
import NavLogo from "../../../public/images/logo.svg";
import ShareIcon from "../../../public/images/share-icon.svg";
import Link from "next/link";
import NavToggleBtn from "../../../public/images/nav-bar-toggle-icon.svg";
import StickyNavLogo from "../../../public/images/das-logo.svg";
import StickyNavShareIcon from "../../../public/images/das-share.svg";
import StickyNavToggleBtn from "../../../public/images/dash-toggle.svg";

import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled ? "mx-[10px]" : "bg-[#2042B6] rounded-t-[20px] pt-[10px]"
      }`}
    >
      <div
        className={`${
          isScrolled ? "bg-[#F3F3F3]" : "bg-[#2042B6]"
        } px-[18px] py-[9px] rounded-[20px] nav-bar flex gap-5 items-center justify-center sm:justify-between flex-wrap`}
      >
        {/* logo side start */}
        <div className="w-[200px] h-[35px]">
          <Image
            src={isScrolled ? StickyNavLogo : NavLogo}
            width={200}
            height={35}
            alt="Wppool logo"
          />
        </div>
        {/* logo side end */}

        {/* nav link side start */}
        <div className="flex items-center gap-5 sm:gap-[25px]">
          <ul className="flex items-center gap-4 sm:gap-[12px]">
            {isScrolled ? (
              <li className="w-[42px] h-[42px] flex items-center justify-center rounded-full das-share-icon cursor-pointer">
                <Link href="#" className="">
                  <Image
                    src={StickyNavShareIcon}
                    width={14}
                    height={14}
                    alt="share-icon"
                  />
                </Link>
              </li>
            ) : (
              <li>
                <Link href="#">
                  <Image
                    src={ShareIcon}
                    width={42}
                    height={42}
                    alt="share-icon"
                  />
                </Link>
              </li>
            )}
            {isScrolled ? (
              <li>
                <Link href="#">
                  <button className="dash-nav-download-btn text-[12px] font-normal leading-[16px] text-black px-[16px] py-[10px] sm:px-[16px] sm:py-[17px] bg-transparent rounded-full cursor-pointer focus:outline-none">
                    Download the 2024 Report
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="#">
                  <button className="nav-download-btn text-[12px] font-normal leading-[16px] text-white px-[16px] py-[10px] sm:px-[16px] sm:py-[17px] bg-transparent rounded-full cursor-pointer focus:outline-none">
                    Download the 2024 Report
                  </button>
                </Link>
              </li>
            )}
          </ul>
          <div className="cursor-pointer">
            <Image
              src={isScrolled ? StickyNavToggleBtn : NavToggleBtn}
              width={20}
              height={16}
              alt="toggle-icon"
            />
          </div>
        </div>
        {/* nav link side end */}
      </div>
    </div>
  );
};

export default NavBar;
