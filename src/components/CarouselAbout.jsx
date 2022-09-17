import "../style/components/carousel-about.scss";

import carouselItem1 from "../assets/images/about/carousel-1.jpg";
import carouselItem2 from "../assets/images/about/carousel-2.jpg";
import carouselItem3 from "../assets/images/about/carousel-3.jpg";

import ductTape from "../assets/images/about/duct-tape.png";

const CarouselAbout = () => {
  return (
    <div className="relative">
      <img
        src={ductTape}
        alt="tape"
        className="absolute -top-[18%] -left-[12%] w-60 lg:w-72 z-40"
      />
      <div
        className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
        id="carousel-about"
      >
        <img
          src={carouselItem1}
          className="w-[85%] h-[85%] rounded-xl absolute"
          alt="item1"
        />
        <img
          src={carouselItem2}
          className="w-[85%] h-[85%] rounded-xl absolute"
          alt="item2"
        />
        <img
          src={carouselItem3}
          className="w-[85%] h-[85%] rounded-xl absolute"
          alt="item3"
        />
      </div>
    </div>
  );
};
export default CarouselAbout;
