"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import CarouselItems from "../CarouselItems/CarouselItems";

const StateUsa = () => {
  const [selectData, setSelectData] = useState(null);
  const selectorDate = [{ name: "2025" }, { name: "2026" }, { name: "2027" }];
  return (
    <div className="mt-[155px] px-[68px] state-usa">
      <div>
        <h2 className="font-['Nantes'] font-[400] text-[48px] text-[#191618]">
          State of USA
        </h2>
        <div className="drop-down-btn mt-[20px]">
          <Dropdown
            value={selectData}
            onChange={(e) => setSelectData(e.value)}
            options={selectorDate}
            optionLabel="name"
            placeholder="2024"
            className="w-[200px] rounded-full text-white"
          />
        </div>
        <p className="mt-[15px] text-[16px] font-[400]">
          Click through the slides or download the report to view natively on
          your device.
        </p>
      </div>

      {/* --- Carousel start --- */}
      <div>
        <CarouselItems />
      </div>
      {/* --- Carousel end --- */}
    </div>
  );
};

export default StateUsa;
