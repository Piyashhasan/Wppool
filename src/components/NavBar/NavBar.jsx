import Image from "next/image";
import NavLogo from "../../../public/images/logo.svg";
import ShareIcon from "../../../public/images/share-icon.svg";
import Link from "next/link";
import NavToggleBtn from "../../../public/images/nav-bar-toggle-icon.svg";

const NavBar = () => {
  return (
    <div className="px-[18px] py-[18px] nav-bar flex gap-5 items-center justify-center sm:justify-between flex-wrap">
      {/* logo side start */}
      <div className="w-[200px] h-[35px]">
        <Image src={NavLogo} width={200} height={35} alt="Wppool logo" />
      </div>
      {/* logo side end */}

      {/* nav link side start */}
      <div className="flex items-center gap-5 sm:gap-[25px]">
        <ul className="flex items-center gap-4 sm:gap-[12px]">
          <li>
            <Link href="#">
              <Image src={ShareIcon} width={42} height={42} alt="share-icon" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <button className="nav-download-btn text-[12px] font-normal leading-[16px] text-white px-[16px] py-[10px] sm:px-[16px] sm:py-[17px] bg-transparent rounded-full cursor-pointer focus:outline-none">
                Download the 2024 Report
              </button>
            </Link>
          </li>
        </ul>
        <div className="cursor-pointer">
          <Image src={NavToggleBtn} width={20} height={16} alt="toggle-icon" />
        </div>
      </div>
      {/* nav link side end */}
    </div>
  );
};

export default NavBar;
