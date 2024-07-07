import Image from "next/image";
import Rectangle from "../../../public/images/rectangle.svg";
import DownArrow from "../../../public/images/down-arrow.png";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="px-[18px] py-[18px] relative">
        <div className="flex justify-center items-center relative z-10">
          <Image src={Rectangle} alt="rectangle" />
        </div>
        <div className="banner-content z-30">
          <h1 className="text-[78px] font-['Nantes'] text-white font-[400]">
            The WPPOOL Index
          </h1>
          <p className="mt-[20px] text-white font-[400] text-[21px] ">
            Monitor the performance of emerging, publicly traded, financial
            technology companies
          </p>
        </div>
        <div className="text-white flex flex-col gap-[40px] absolute top-40 z-20">
          <div>
            <p className="text-[36px] font-['Nantes']">60</p>
            <p className="mt-[16px] text-[16px] text-[#CDCDCD]">Companies</p>
          </div>
          <div>
            <p className="text-[36px] font-['Nantes']">$100B</p>
            <p className="mt-[16px] text-[16px] text-[#CDCDCD]">Market cap</p>
          </div>
          <div>
            <p className="text-[36px] font-['Nantes']">3.5x</p>
            <p className="mt-[16px] text-[16px] text-[#CDCDCD]">
              Revenue multiple
            </p>
          </div>
          <div>
            <p className="text-[36px] font-['Nantes']">60%</p>
            <p className="mt-[16px] text-[16px] text-[#CDCDCD]">
              LTM avg. revenue growth rate
            </p>
          </div>
        </div>

        <div className="absolute right-0 z-40 cursor-pointer">
          <Image src={DownArrow} alt="Down arrow" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
