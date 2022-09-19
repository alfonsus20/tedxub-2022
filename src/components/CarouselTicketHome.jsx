import { useState } from "react";
import Slider from "react-slick";
import cn from "classnames";

import ticket1 from "../assets/images/home/ticket-1.png";
import ticket2 from "../assets/images/home/ticket-2.png";
import ticket3 from "../assets/images/home/ticket-3.png";

import "../style/components/carousel-ticket-home.scss";

const arrOfImg = [ticket3, ticket2, ticket1];

const CarouselTicketHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    draggable: false,
    beforeChange: (_, next) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="text-white overflow-hidden">
      {[...new Array(6).keys()].map((_, idx) => (
        <div>
          <img
            src={arrOfImg[idx % 3]}
            className={cn("transition duration-1000 md:ml-auto transform", {
              "scale-[100%] md:translate-x-[1%]":
                idx === (activeSlide + 1) % 6,
              "scale-[90%] md:translate-x-[18%] blur-xs":
                idx !== (activeSlide + 1) % 6,
            })}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselTicketHome;
