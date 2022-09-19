import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../style/components/ticket-carousel.scss";
import { useEffect, useState } from "react";
import TicketEarlyBird from "../assets/images/ticket-early-bird.png";
import TicketPresale1 from "../assets/images/ticket-presale-1.png";
import TicketPresale2 from "../assets/images/ticket-presale-2.png";

const TicketCarousel = ({activeTicket, setSelectedTicket, ticketLists}) => {
  
  const [currentSlide, setCurrentSlide] = useState(1); 

  const handleSlide = (index, type, price, quota) => {
    setCurrentSlide(index);
    setSelectedTicket({
      jenis_tiket: type,
      price: price,
      quota: quota,
    });
  }

  useEffect(() => {
    switch (activeTicket) {
      case "Early Bird":
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
    <div className="text-main-2 carousel-wrapper">
      <CarouselProvider
        touchEnabled={false}
        dragEnabled={false}
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={3}
        visibleSlides={1}
        dragStep={1}
        currentSlide={currentSlide}
      >
        <Slider>
          {ticketLists.map((ticket, idx) => {
            return (
              <Slide key={idx} index={idx} onClick={() => handleSlide(idx, ticket.jenis_tiket, ticket.price, ticket.quota)} className={`cursor-pointer ${activeTicket == ticket.jenis_tiket && ticket.quota > 0 ? "active" : "not-active"}`}>
                <img src={ticket.jenis_tiket == "Early Bird" ? TicketEarlyBird : ticket.jenis_tiket == "Presale 1" ? TicketPresale1 : TicketPresale2} alt={ticket.type} />
                <div className="heading-container z-50 absolute w-full h-full flex justify-center items-center text-center">
                  <h1 className="font-akira text-base lg:text-4xl text-main-2">{ticket.quota <= 0 ? "SOLD OUT" : activeTicket != ticket.jenis_tiket ? "Coming Soon" : ""}</h1>
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