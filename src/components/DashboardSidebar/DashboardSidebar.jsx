import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiMinusSm } from "react-icons/hi";

const DashboardSidebar = () => {
  return (
    <div
      className={`w-[225px] px-[8px] pt-[8px] bg-[#EFF3F6] rounded-[14px] min-h-[600px]`}
    >
      <ul className="flex flex-col gap-y-[5px] font-['Nantes'] font-[400] text-[16px] text-[#3d5c75]">
        <li className="active-link py-[13px] px-[10px] rounded-[6px] flex items-center justify-between cursor-pointer">
          The Index
          <HiMinusSm className="text-[18px]" />
        </li>
        <li className="py-[13px] px-[10px] rounded-[6px] flex items-center justify-between cursor-pointer">
          The Index Tab Two
          <HiOutlinePlusSmall className="text-[18px]" />
        </li>
        <li className="py-[13px] px-[10px] rounded-[6px] flex items-center justify-between cursor-pointer">
          The Index Tab Three
          <HiOutlinePlusSmall className="text-[18px]" />
        </li>
        <li className="py-[13px] px-[10px] rounded-[6px] flex items-center justify-between cursor-pointer">
          The Index Tab Four
          <HiOutlinePlusSmall className="text-[18px]" />
        </li>
        <li className="py-[13px] px-[10px] rounded-[6px] flex items-center justify-between cursor-pointer">
          The Index Tab Five
          <HiOutlinePlusSmall className="text-[18px]" />
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
