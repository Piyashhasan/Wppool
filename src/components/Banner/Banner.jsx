import Image from "next/image";
import Rectangle from "../../../public/images/rectangle.svg";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="px-[18px] py-[18px] relative">
        <div className="rectangle-image">
          <Image src={Rectangle} alt="rectangle" />
        </div>

        <div className="banner-content">
          <h1 className="font-['Nantes'] font-[400] text-white text-[26px] sm:text-[78px]  ">
            The WPPOOL Index
          </h1>
          <p className="text-[14px] mt-[20px] text-white font-[400] sm:text-[21px] ">
            Monitor the performance of emerging, publicly traded, financial
            technology companies
          </p>
        </div>

        <div className="banner-left-side">
          <div className="w-[110px] text-center lg:w-auto lg:text-left ">
            <p className="text-[25px] lg:text-[36px] font-['Nantes']">60</p>
            <p className="mt-[5px] text-[12px] text-[#CDCDCD] sm:mt-[16px] lg:text-[16px]">
              Companies
            </p>
          </div>
          <div className="w-[110px] text-center lg:w-auto lg:text-left ">
            <p className="text-[25px] lg:text-[36px] font-['Nantes']">$100B</p>
            <p className="mt-[5px] text-[12px] text-[#CDCDCD] sm:mt-[16px] lg:text-[16px]">
              Market cap
            </p>
          </div>
          <div className="w-[110px] text-center lg:w-auto lg:text-left ">
            <p className="text-[25px] lg:text-[36px] font-['Nantes']">3.5x</p>
            <p className="mt-[5px] text-[12px] text-[#CDCDCD] sm:mt-[16px] lg:text-[16px]">
              Revenue multiple
            </p>
          </div>
          <div className="w-[110px] text-center lg:w-auto lg:text-left ">
            <p className="text-[25px] lg:text-[36px] font-['Nantes']">60%</p>
            <p className="mt-[5px] text-[12px] text-[#CDCDCD] sm:mt-[16px] lg:text-[16px]">
              LTM avg. revenue growth rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
