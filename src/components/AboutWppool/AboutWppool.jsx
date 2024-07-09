import React from "react";
import AboutImage from "../../../public/images/about.svg";
import Image from "next/image";

const AboutWppool = () => {
  return (
    <div className="px-[68px]">
      <hr style={{ borderTop: "1px solid #90B8F0" }} />
      <div className="mt-[80px] mb-[100px] bg-white rounded-[12px] flex justify-between items-center">
        <div className="pl-[72px]">
          <h2 className="font-['Nantes'] text-[48px] font-[400] text-[#191618]">
            About WPPOOL
          </h2>
          <h3 className="font-['Nantes'] text-[30px] text-[#7D7F81] font-[400] mt-[20px]">
            Investing in wppool for over 50 years
          </h3>
          <p className="text-[15px] text-[#191618] leading-[28px] mt-[16px] pr-[5px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi{" "}
            <span className="underline">repudiandae</span> consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
          <button className="mt-[30px] px-[18px] py-[18px] border-none outline-none rounded-full bg-[#2042B6] text-white text-[16px] font-[400]">
            Contact WPPOOL
          </button>
        </div>
        <div>
          <Image src={AboutImage} alt="about image" />
        </div>
      </div>
      <hr style={{ borderTop: "1px solid #90B8F0" }} />
    </div>
  );
};
export default AboutWppool;
