import Image from "next/image";
import CompanySearchIcon from "../../../public/images/company-search-icon.svg";
import CompaniesTable from "../CompaniesTable/CompaniesTable";

const AllCompanies = () => {
  return (
    <>
      <div className="all-companies">
        <div className="flex flex-col sm:flex-row items-center justify-between px-[40px] py-[40px]">
          <h2 className="font-['Nantes'] text-[36px] lg:text-[48px] text-[#191618] font-[400]">
            All Companies
          </h2>
          <div className="mt-5 sm:mt-0 lg:w-[580px] lg:max-w-[580px] flex items-center relative">
            <Image
              className="absolute left-[20px]"
              src={CompanySearchIcon}
              alt="search icon"
            />
            <input
              type="text"
              placeholder="Search Companies"
              className="company-search-input"
            />
          </div>
        </div>
        <div className="company-table-data">
          <CompaniesTable />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-[40px] gap-[12px]">
        <button className="px-[19px] py-[14px] md:p-[19px] border-none bg-[#2042B6] rounded-full text-white cursor-pointer hover:bg-blue-700">
          Download ‘All Companies’ Data
        </button>

        <button className="px-[19px] py-[14px] md:p-[19px] border-none bg-[#2042B6] rounded-full text-white cursor-pointer hover:bg-blue-700">
          View Methodology
        </button>
      </div>
    </>
  );
};

export default AllCompanies;
