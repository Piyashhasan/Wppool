import React from "react";
import AboutImage from "../../../public/images/about.svg";
import Image from "next/image";

const AboutWppool = () => {
  return (
    <div className="xl:px-[68px]">
      <hr style={{ borderTop: "1px solid #90B8F0" }} />
      <div className="mt-[80px] mb-[100px] p-5 bg-white rounded-[12px] flex flex-col justify-between items-center lg:flex-row lg:p-0 ">
        <div className="order-2 lg:pl-[72px] lg:order-1">
          <h2 className="mt-[50px] font-['Nantes'] text-[36px] font-[400] text-[#191618] lg:mt-0 lg:text-[48px]">
            About WPPOOL
          </h2>
          <h3 className="font-['Nantes'] text-[26px] text-[#7D7F81] font-[400] mt-[20px] lg:text-[30px]">
            Investing in wppool for over 50 years
          </h3>
          <p className="text-[14px] text-[#191618] leading-[28px] mt-[16px] pr-[5px] lg:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi{" "}
            <span className="underline">repudiandae</span> consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
          <button className="mt-[30px] px-[18px] py-[14px] border-none outline-none rounded-full bg-[#2042B6] text-white text-[14px] font-[400] cursor-pointer hover:bg-blue-700 lg:text-[16px] lg:py-[18px] ">
            Contact WPPOOL
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            className="w-full h-full md:w-auto md:h-auto"
            src={AboutImage}
            alt="about image"
          />
        </div>
      </div>
      <hr style={{ borderTop: "1px solid #90B8F0" }} />
    </div>
  );
};
export default AboutWppool;
