import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../style/components/ticket-carousel.scss";
import TicketEarlyBird from "../assets/images/ticket-early-bird.png";
import TicketPresale1 from "../assets/images/ticket-presale-1.png";
import TicketPresale2 from "../assets/images/ticket-presale-2.png";
import { useEffect, useState } from "react";

const TicketLists = [
  {
    type: "Early Bird + TED Kit",
    price: 105000,
    quota: 0,
    photo: TicketEarlyBird,
  },
  {
    type: "Presale 1",
    price: 120000,
    quota: 100,
    photo: TicketPresale1,
  },
  {
    type: "Presale 2",
    price: 130000,
    quota: 100,
    photo: TicketPresale2,
  },
]

const TicketCarousel = ({activeTicket, setTicket}) => {

  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlide = (index, type, price) => {
    setCurrentSlide(index);
    setTicket({
      type: type,
      price: price,
    });
  }

  useEffect(() => {
    switch (activeTicket) {
      case "Early Bird + TED Kit":
        setCurrentSlide(0);
        break;
      case "Presale 1":
        setCurrentSlide(1);
        break;
      case "Presale 2":
        setCurrentSlide(2);
        break;
      default:
        setCurrentSlide(0);
        break;
    };
  }, []);

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
          {TicketLists.map((ticket, idx) => {
            return (
              <Slide index={idx} onClick={() => handleSlide(idx, ticket.type, ticket.price)} className={`cursor-pointer ${activeTicket == ticket.type && ticket.quota > 0 ? "active" : "not-active"}`}>
                <img src={ticket.photo} alt={ticket.type} />
                <div className="heading-container z-50 absolute w-full h-full flex justify-center items-center text-center">
                  <h1 className="font-akira text-4xl text-main-2">{ticket.quota <= 0 ? "SOLD OUT" : activeTicket != ticket.type ? "Coming Soon" : ""}</h1>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
}
 
export default TicketCarousel;