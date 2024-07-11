import { portfolioCompaniesData } from "@/utils/portfolioCompaniesData";
import Image from "next/image";
import React from "react";

const PortfolioCompany = () => {
  return (
    <div className="xl:px-[68px] mt-[126px]">
      <div>
        <h2 className="font-['Nantes'] font-[400] text-[36px] lg:text-[48px] text-[#191618]">
          Selected WPPOOL Portfolio Companies
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-[48px]">
        {portfolioCompaniesData.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white h-[120px] rounded-[6px] flex items-center justify-center object-cover object-top"
            >
              <Image
                className="object-cover object-top"
                src={data?.img}
                alt={data?.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioCompany;
