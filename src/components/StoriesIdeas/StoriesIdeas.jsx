import Image from "next/image";
import { storiesIdeasData } from "@/utils/storiesIdeasData";

const StoriesIdeas = () => {
  return (
    <div className="mt-[190px] px-[68px] mb-[100px]">
      <div className="">
        <h2 className="font-['Nantes'] text-[48px] text-[#191618] font-[400]">
          Stories & Ideas
        </h2>
        <p className="mt-[18px] text-[20px] text-[#191618] font-[400]">
          The latest news and updates
        </p>
      </div>

      <div className="grid grid-cols-3 items-center gap-x-[20px] gap-y-[80px] mt-[86px]">
        {storiesIdeasData.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white pl-[20px] pr-[37px] rounded-[10px] relative min-h-[220px]"
            >
              <div className="w-[120px] h-[120px] object-cover object-top rounded-[5px] absolute z-10 top-[-45px]">
                {data?.carrot && (
                  <div className="absolute bg-white rounded-tl-[4px] px-[5px] pb-[3px] z-20">
                    <Image src={data?.carrot} alt={data?.alt} />
                  </div>
                )}

                <Image
                  width={120}
                  height={120}
                  className="object-cover object-top w-[120px] h-[120px] rounded-[5px]"
                  src={data?.img}
                  alt={data?.alt}
                />
              </div>
              <div>
                <p className="text-[#2042B6] text-[14px] font-[400] mb-[5px] mt-[90px]">
                  By: {data?.name}
                </p>
                <p className="text-[16px] text-[#191618] font-['Nantes'] font-[400]">
                  {data?.description}
                </p>
                <button className="absolute bottom-5 border-none outline-none px-[12px] py-[10px] text-white bg-[#2042B6] rounded-full   cursor-pointer hover:bg-blue-700">
                  {data?.btnText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoriesIdeas;
