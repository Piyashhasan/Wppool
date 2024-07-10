"use client";
import React, { useState } from "react";
import Union from "../../../public/images/union.svg";
import Image from "next/image";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Dropdown } from "primereact/dropdown";
import LineChart from "../LineChart/LineChart";

const DashboardMainContent = ({ handleToggleSidebar, isSidebarVisible }) => {
  const [selector, setSelector] = useState(null);
  const selectorItems = [
    { name: "item one" },
    { name: "item two" },
    { name: "item three" },
  ];
  return (
    <div className="w-full">
      {/* --- title start --- */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <Image width={46} height={41} src={Union} alt="union icon" />
          <h2 className="font-['Nantes'] font-[400] text-[36px] text-[#191618]">
            The WPPOOL Index
          </h2>
        </div>
        <div
          className="cursor-pointer flex items-center lg:hidden"
          onClick={handleToggleSidebar}
        >
          {isSidebarVisible ? (
            <RxCross2 className="text-[28px]" />
          ) : (
            <RxHamburgerMenu className="text-[28px]" />
          )}
        </div>
      </div>
      {/* --- title end --- */}

      {/* --- tracking information start --- */}
      <div className="mt-[10px] grid grid-cols-4 gap-[20px] pr-[45px]">
        <div className="pl-[14px] pr-[10px] py-[14px] bg-[#F3F3F3] rounded-[6px] flex items-center justify-between">
          <h3 className="font-['Nantes'] font-[400] text-[30px] text-[#FC714D]">
            +66.2%
          </h3>
          <div className="flex items-center gap-[8px]">
            <p className="text-right font-[400] text-[12px] text-[#191618]">
              WPPOOL <br /> Index
            </p>
            <div className="w-1 h-[30px] bg-[#FC714D] rounded-[2px]"></div>
          </div>
        </div>

        <div className="pl-[14px] pr-[10px] py-[14px] bg-[#F3F3F3] rounded-[6px] flex items-center justify-between">
          <h3 className="font-['Nantes'] font-[400] text-[30px] text-[#615DE3]">
            +26.6%
          </h3>
          <div className="flex items-center gap-[8px]">
            <p className="text-right font-[400] text-[12px] text-[#191618]">
              Google <br /> Index
            </p>
            <div className="w-1 h-[30px] bg-[#615DE3] rounded-[2px]"></div>
          </div>
        </div>

        <div className="pl-[14px] pr-[10px] py-[14px] bg-[#F3F3F3] rounded-[6px] flex items-center justify-between">
          <h3 className="font-['Nantes'] font-[400] text-[30px] text-[#7CA63A]">
            +34.1%
          </h3>
          <div className="flex items-center gap-[8px]">
            <p className="text-right font-[400] text-[12px] text-[#191618]">
              Microsoft
            </p>
            <div className="w-1 h-[30px] bg-[#AFCD80] rounded-[2px]"></div>
          </div>
        </div>

        <div className="pl-[14px] pr-[10px] py-[14px] bg-[#F3F3F3] rounded-[6px] flex items-center justify-between">
          <h3 className="font-['Nantes'] font-[400] text-[30px] text-[#6F34A1]">
            +17%
          </h3>
          <div className="flex items-center gap-[8px]">
            <p className="text-right font-[400] text-[12px] text-[#191618]">
              Twitter <br /> Index
            </p>
            <div className="w-1 h-[30px] bg-[#6F34A1] rounded-[5px]"></div>
          </div>
        </div>
      </div>
      {/* --- tracking information end --- */}

      {/* --- filter button start --- */}
      <div className="mt-[21px] flex items-center justify-between pr-[45px]">
        <div className="flex items-center gap-[13px]">
          <div className="drop-down-btn">
            <Dropdown
              value={selector}
              onChange={(e) => setSelector(e.value)}
              options={selectorItems}
              optionLabel="name"
              placeholder="Selectors"
              className="w-[178px] rounded-full text-white"
            />
          </div>
          <div className="drop-down-btn">
            <Dropdown
              value={selector}
              onChange={(e) => setSelector(e.value)}
              options={selectorItems}
              optionLabel="name"
              placeholder="Type of IPO"
              className="w-[178px] rounded-full text-white"
            />
          </div>
        </div>
        <div>
          <div className="bg-[#EFF3F6] flex items-center gap-[10px] py-[3px] pl-[52px] pr-[11px] rounded-full">
            <button className="border-none px-[9px] py-[8px] rounded-full text-[#748DA1] text-[12px] cursor-pointer">
              1Y
            </button>
            <button className="border-none px-[9px] py-[8px] rounded-full text-[#748DA1] text-[12px] cursor-pointer">
              YTD
            </button>
            <button className="px-[9px] py-[8px] rounded-full border-none bg-[#2042B6] text-white text-[12px]">
              6M
            </button>
            <button className="border-none px-[9px] py-[8px] rounded-full text-[#748DA1] text-[12px] cursor-pointer">
              1M
            </button>
            <button className="border-none px-[9px] py-[8px] rounded-full text-[#748DA1] text-[12px] cursor-pointer">
              1W
            </button>
          </div>
        </div>
      </div>
      {/* --- filter button end --- */}

      {/* --- graph --- */}
      <div className="pr-[45px] mt-[30px]">
        <div className="w-full max-h-[350px]">
          <LineChart />
        </div>
      </div>
      {/* --- graph --- */}
    </div>
  );
};

export default DashboardMainContent;
