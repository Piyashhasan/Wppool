import Image from "next/image";
import { potentialFutureData } from "@/utils/potentialFutureData";

const PotentialFuture = () => {
  return (
    <div className="px-[68px] mt-[150px]">
      <div>
        <h2 className="font-['Nantes'] text-[48px] text-[#191618] font-[400]">
          Potential Future Listings
        </h2>
        <p className="mt-[18px] text-[16px] text-[#191618] font-[400]">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-center mt-[26px]">
        {potentialFutureData.map((data, index) => {
          return (
            <div
              key={index}
              className="w-[220px] h-[120px] bg-white rounded-[6px] flex items-center justify-center"
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
