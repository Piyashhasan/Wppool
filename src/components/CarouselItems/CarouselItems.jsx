// "use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carouselItems } from "@/utils/carouselItems";
import Image from "next/image";

const CarouselItems = () => {
  carouselItems;
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
  return (
    <div className="slider-container">
      <Slider {...settings}>
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
    </div>
  );
};

export default CarouselItems;
