"use client";
import Image from "next/image";
import NavLogo from "../../../public/images/logo.svg";
import ShareIcon from "../../../public/images/share-icon.svg";
import Link from "next/link";
import NavToggleBtn from "../../../public/images/nav-bar-toggle-icon.svg";
import StickyNavLogo from "../../../public/images/das-logo.svg";
import StickyNavShareIcon from "../../../public/images/das-share.svg";
import StickyNavToggleBtn from "../../../public/images/dash-toggle.svg";
import ShareIconToggleNav from "../../../public/images/share-icon-toggle-nav.svg";
import { RxCross2 } from "react-icons/rx";

import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMiniNavVisible, setMiniNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setMiniNavVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMiniNavVisibility = () => {
    setMiniNavVisible(!isMiniNavVisible);
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setMiniNavVisible(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        isScrolled ? "mx-[10px]" : "bg-[#2042B6] rounded-t-[20px]"
      } transition-all duration-300`}
    >
      <div
        className={`${
          isScrolled ? "bg-[#F3F3F3]" : "bg-[#2042B6]"
        } px-[18px] py-[18px]  rounded-[20px] nav-bar flex gap-5 items-center justify-between flex-wrap transition-all duration-300`}
      >
        {/* logo side start */}
        <div className="w-[180px] h-[35px]">
          <Image
            src={isScrolled ? StickyNavLogo : NavLogo}
            width={180}
            height={35}
            alt="Wppool logo"
          />
        </div>
        {/* logo side end */}

        {/* nav link side start */}
        <div className="flex items-center gap-5 sm:gap-[25px]">
          <ul className="flex items-center gap-4 sm:gap-[12px]">
            {isScrolled ? (
              <li className="hidden w-[42px] h-[42px] sm:flex sm:items-center sm:justify-center rounded-full das-share-icon cursor-pointer">
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
              <li className="hidden sm:block">
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
              <li className="hidden sm:block">
                <Link href="#">
                  <button className="dash-nav-download-btn text-[12px] font-normal leading-[16px] text-black px-[16px] py-[10px] sm:px-[16px] sm:py-[17px] bg-transparent rounded-full cursor-pointer focus:outline-none">
                    Download the 2024 Report
                  </button>
                </Link>
              </li>
            ) : (
              <li className="hidden sm:block">
                <Link href="#">
                  <button className="nav-download-btn text-[12px] font-normal leading-[16px] text-white px-[16px] py-[10px] sm:px-[16px] sm:py-[17px] bg-transparent rounded-full cursor-pointer focus:outline-none">
                    Download the 2024 Report
                  </button>
                </Link>
              </li>
            )}
          </ul>

          {/* mini nav link start */}
          <div className="cursor-pointer relative">
            <div onClick={toggleMiniNavVisibility}>
              <Image
                src={isScrolled ? StickyNavToggleBtn : NavToggleBtn}
                width={20}
                height={16}
                alt="toggle-icon"
              />
            </div>
            {isMiniNavVisible && (
              <div className="bg-white w-[298px] px-[16px] py-[20px] sm:w-[338px] sm:max-w-[338px] sm:p-[35px] rounded-[18px] absolute top-[-25px] sm:top-[-33px] right-[-17px] z-10">
                <div className="flex items-center justify-between">
                  <Image src={ShareIconToggleNav} alt="share icon" />
                  <button className="nav-download-btn text-[12px] font-normal leading-[16px] text-white px-[16px] py-[10px] sm:px-[16px] sm:py-[17px] bg-[#2042B6] rounded-full cursor-pointer focus:outline-none">
                    Download the 2024 Report
                  </button>
                  <RxCross2
                    onClick={() => setMiniNavVisible(false)}
                    className="text-[30px]"
                  />
                </div>
                <div className="mt-[33px]">
                  <ul className="text-[18px] font-[400] flex flex-col gap-[24px]">
                    <li>
                      <Link
                        className="text-[#191618]"
                        href="#wppool-index"
                        onClick={(e) => handleLinkClick(e, "wppool-index")}
                      >
                        The WPPOOL Index
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[#191618]"
                        href="#all-companies"
                        onClick={(e) => handleLinkClick(e, "all-companies")}
                      >
                        All Companies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[#191618]"
                        href="#future-listings"
                        onClick={(e) => handleLinkClick(e, "future-listings")}
                      >
                        Potential Future Listings
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[#191618]"
                        href="#state-of-usa"
                        onClick={(e) => handleLinkClick(e, "state-of-usa")}
                      >
                        State of USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[#191618]"
                        href="#stories-ideas"
                        onClick={(e) => handleLinkClick(e, "stories-ideas")}
                      >
                        Stories & Ideas
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[#191618]"
                        href="#about-wppool"
                        onClick={(e) => handleLinkClick(e, "about-wppool")}
                      >
                        About WPPOOL
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[#191618]"
                        href="#portfolio-companies"
                        onClick={(e) =>
                          handleLinkClick(e, "portfolio-companies")
                        }
                      >
                        WPPOOL Portfolio Companies
                      </Link>
                    </li>
                    <li className="mt-[12px]">
                      <Link
                        className="text-[#2042B6] text-[21px] font-['Nantes']"
                        href="#"
                      >
                        Visit WPPOOL
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* nav link side end */}
      </div>
    </div>
  );
};

export default NavBar;
