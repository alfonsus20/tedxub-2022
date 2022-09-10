import "../../style/components/carousel-about.scss";

import carouselItem1 from "../../assets/images/about/carousel-1.jpg";
import carouselItem2 from "../../assets/images/about/carousel-2.jpg";
import carouselItem3 from "../../assets/images/about/carousel-3.jpg";


// const topPos = [52, 26, 0];
// const leftPos = [50, 28, 0];
// const rotations = [12, 4, -6];
// const zIndex = [10, 20, 30];

const CarouselAbout = () => {
  return (
    <div className="relative w-[400px] h-[400px]" id="carousel-about">
      <img
        src={carouselItem1}
        className="w-[21rem] h-[21rem] rounded-xl absolute"
        alt="item1"
      />
      <img
        src={carouselItem2}
        className="w-[21rem] h-[21rem] rounded-xl absolute"
        alt="item2"
      />
      <img
        src={carouselItem3}
        className="w-[21rem] h-[21rem] rounded-xl absolute"
        alt="item3"
      />
    </div>
  );
};
export default CarouselAbout;
