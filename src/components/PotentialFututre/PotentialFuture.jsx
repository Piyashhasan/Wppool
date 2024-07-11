import Image from "next/image";
import { potentialFutureData } from "@/utils/potentialFutureData";

const PotentialFuture = () => {
  return (
    <div className="xl:px-[68px] mt-[150px]">
      <div>
        <h2 className="font-['Nantes'] text-[36px] lg:text-[48px] text-[#191618] font-[400]">
          Potential Future Listings
        </h2>
        <p className="mt-[18px] text-[14px] lg:text-[16px] text-[#191618] font-[400]">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-[26px]">
        {potentialFutureData.map((data, index) => {
          return (
            <div
              key={index}
              className="h-[120px] bg-white rounded-[6px] flex items-center justify-center"
            >
              <Image
                width={data?.width}
                height={data?.height}
                className="w-[133px] h-[55px]"
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

export default PotentialFuture;
