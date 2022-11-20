import {
  CarouselProvider,
  Slider,
  Slide,
  CarouselContext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../style/components/ticket-carousel.scss";
import { useContext, useEffect, useState } from "react";
import TicketEarlyBird from "../assets/images/ticket-early-bird.png";
import TicketPresale1 from "../assets/images/ticket-presale-1.png";
import TicketPresale2 from "../assets/images/ticket-special-ticket.png";

const TicketCarousel = ({activeTicket, setSelectedTicket, ticketLists}) => {
  
  const [currentSlide, setCurrentSlide] = useState(1); 
  
  function CarouselWithContext() {
    const carouselContext = useContext(CarouselContext);

    useEffect(() => {
      function onChange() {
        setCurrentSlide(carouselContext.state.currentSlide)
      }
  
      carouselContext.subscribe(onChange);
      return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);
  }


  const handleSlide = (index, type, price, remaining_ticket) => {
    if(window.innerWidth >= 640) {
      setCurrentSlide(index);
      setSelectedTicket({
        jenis_tiket: type,
        price: price,
        remaining_ticket: remaining_ticket,
      });
    }
  }

  useEffect(() => {
    switch (activeTicket.jenis_tiket) {
      case "Early Bird":
        setCurrentSlide(0);
        break;
      case "Presale 1":
        setCurrentSlide(1);
        break;
      case "Special Ticket":
        setCurrentSlide(2);
        break;
      default:
        setCurrentSlide(0);
        break;
    };
  }, []);
  
  useEffect(() => {
    if (window.innerWidth < 640) {
      switch (currentSlide) {
        case 0:
          setSelectedTicket({
            jenis_tiket: "Early Bird",
            price: ticketLists[0].price,
            remaining_ticket: ticketLists[0].remaining_ticket,
          });
          break;
        case 1:
          setSelectedTicket({
            jenis_tiket: "Presale 1",
            price: ticketLists[1].price,
            remaining_ticket: ticketLists[1].remaining_ticket,
          });
          break;
        case 2:
          setSelectedTicket({
            jenis_tiket: "Special Ticket",
            price: ticketLists[2].price,
            remaining_ticket: ticketLists[2].remaining_ticket,
          });
          break;
        default:
          setSelectedTicket({
            jenis_tiket: activeTicket.jenis_tiket,
            price: activeTicket.price,
            remaining_ticket: activeTicket.remaining_ticket,
          });
          break;
      };
    }
  }, [currentSlide])

  return (
    <div className="text-main-2 carousel-wrapper">
      <CarouselProvider
        touchEnabled={window.innerWidth < 640 ? true : false}
        dragEnabled={window.innerWidth < 640 ? true : false}
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
              <Slide key={idx} index={idx} onClick={() => handleSlide(idx, ticket.jenis_tiket, ticket.price, ticket.remaining_ticket)} className={`cursor-pointer ${activeTicket.jenis_tiket == ticket.jenis_tiket && ticket.remaining_ticket > 0 ? "active" : "not-active"}`}>
                <img src={ticket.jenis_tiket == "Early Bird" ? TicketEarlyBird : ticket.jenis_tiket == "Presale 1" ? TicketPresale1 : TicketPresale2} alt={ticket.type} />
                <div className="heading-container z-50 absolute w-full h-full flex justify-center items-center text-center">
                  <h1 className="font-akira text-base lg:text-4xl text-main-2">{ticket.remaining_ticket <= 0 ? "SOLD OUT" : activeTicket.jenis_tiket != ticket.jenis_tiket ? "Coming Soon" : ""}</h1>
                </div>
              </Slide>
            );
          })}
        </Slider>
        { window.innerWidth < 640 ? <CarouselWithContext /> : <></>}
      </CarouselProvider>
    </div>
  );
}
 
export default TicketCarousel;