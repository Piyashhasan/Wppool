import Image from "next/image";
import DasLogo from "../../../public/images/das-logo.svg";
import DasShareIcon from "../../../public/images/das-share.svg";
import Link from "next/link";
import NavToggleBtn from "../../../public/images/dash-toggle.svg";

const DashboardNavBar = () => {
  return (
    <nav className="bg-[#F3F3F3] rounded-[10px]">
      <div className="px-[18px] py-[8px] flex gap-5 items-center justify-center sm:justify-between flex-wrap">
        {/* logo side start */}
        <div className="w-[200px] h-[35px]">
          <Image src={DasLogo} width={200} height={35} alt="Wppool logo" />
        </div>
        {/* logo side end */}

        {/* nav link side start */}
        <div className="flex items-center gap-5 sm:gap-[25px]">
          <ul className="flex items-center gap-4 sm:gap-[12px]">
            <li className="w-[42px] h-[42px] flex items-center justify-center rounded-full das-share-icon cursor-pointer">
              <Link href="#">
                <Image
                  src={ShareIcon}
                  width={14}
                  height={14}
                  alt="share-icon"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <button className="dash-nav-download-btn text-[12px] font-normal leading-[16px] text-black px-[16px] py-[10px] sm:px-[16px] sm:py-[17px] bg-transparent rounded-full cursor-pointer focus:outline-none">
                  Download the 2024 Report
                </button>
              </Link>
            </li>
          </ul>
          <div className="cursor-pointer">
            <Image
              src={NavToggleBtn}
              width={20}
              height={16}
              alt="toggle-icon"
            />
          </div>
        </div>
        {/* nav link side end */}
      </div>
    </nav>
  );
};

export default DashboardNavBar;
