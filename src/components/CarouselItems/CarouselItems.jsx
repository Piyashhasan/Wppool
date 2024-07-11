"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carouselItems } from "@/utils/carouselItems";
import Image from "next/image";
import { useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown";

const CarouselItems = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [searchCarousel, setSearchCarousel] = useState(null);
  const searchInput = [
    { slideNo: "1 and 2" },
    { slideNo: "2 and 3" },
    { slideNo: "3 and 4" },
    { slideNo: "4 and 5" },
  ];
  const sliderRef = useRef(null);
  const handleDropdownChange = (e) => {
    setSearchCarousel(e.value);
    const value = e.value.slideNo;
    const [start, end] = value.split(" and ").map(Number);
    sliderRef.current.slickGoTo(start - 1);
  };

  return (
    <div className="slider-container relative pb-[150px]">
      <Slider ref={sliderRef} {...settings}>
        {carouselItems.map((item, index) => {
          return (
            <div
              key={index}
              className="object-cover object-top max-w-[580px] overflow-hidden rounded-[6px] mt-[20px]"
            >
              <Image
                className="max-w-[580px] object-cover object-top overflow-hidden rounded-[6px]"
                src={item?.img}
                alt={item?.alt}
              />
            </div>
          );
        })}
      </Slider>
      <div className="absolute bottom-[88px] left-[150px]">
        <div className="flex items-center gap-[10px]">
          <small>Pages</small>
          <div className="drop-down-btn">
            <Dropdown
              value={searchCarousel}
              onChange={handleDropdownChange}
              options={searchInput}
              optionLabel="slideNo"
              placeholder="1 and 2"
              className="w-[130px] rounded-full text-white"
            />
          </div>
          <small>of 37</small>
        </div>
      </div>
      <div className="absolute right-[70px] mt-[15px]">
        <button className="border-none outline-none py-[23px] px-[20px] rounded-full bg-[#2042B6] text-white cursor-pointer">
          Download the 2023 Report
        </button>
      </div>
    </div>
  );
};

export default CarouselItems;
