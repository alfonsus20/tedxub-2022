import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../style/components/ticket-carousel.scss";
import TicketEarlyBird from "../assets/images/ticket-early-bird.png";
import TicketPresale1 from "../assets/images/ticket-presale-1.png";
import TicketPresale2 from "../assets/images/ticket-presale-2.png";
import { useState } from "react";

const TicketCarousel = ({setTicket}) => {

  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlide = (index, type, price) => {
    setCurrentSlide(index);
    setTicket({
      type: type,
      price: price,
    });
  }

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={3}
        visibleSlides={1}
        currentSlide={currentSlide}
      >
        <Slider>
          <Slide index={0} onClick={() => handleSlide(0, "Early Bird + TED Kit", 105000)} className="cursor-pointer">
            <img src={TicketEarlyBird} alt="Ticket Early Bird" />
          </Slide>
          <Slide index={1} onClick={() => handleSlide(1, "Presale 1", 120000)} className="cursor-pointer">
            <img src={TicketPresale1} alt="Ticket Presale 1" />
          </Slide>
          <Slide index={2} onClick={() => handleSlide(2, "Presale 2", 130000)} className="cursor-pointer">
            <img src={TicketPresale2} alt="Ticket Presale 2" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
}
 
export default TicketCarousel;