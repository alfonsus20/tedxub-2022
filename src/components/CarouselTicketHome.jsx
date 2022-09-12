import { useState } from "react";
import Slider from "react-slick";
import cn from "classnames";

import ticket1 from "../assets/images/home/ticket-1.png";
import ticket2 from "../assets/images/home/ticket-2.png";
import ticket3 from "../assets/images/home/ticket-3.png";

import "../style/components/carousel-ticket-home.scss";

const arrOfImg = [ticket1, ticket2, ticket3];

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
    autoplaySpeed: 1000,
    beforeChange: (_, next) => {
      setActiveSlide(next);
    },
  };

  return (
    <Slider {...settings} className="text-white overflow-hidden">
      {[...new Array(6).keys()].map((_, idx) => (
        <div>
          <img
            src={arrOfImg[idx % 2]}
            className={cn("transition duration-1000", {
              "scale-[100%]": idx  === (activeSlide + 1) % 6,
              "scale-[90%]": idx  !== (activeSlide + 1) % 6,
            })}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselTicketHome;
