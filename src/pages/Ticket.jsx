import ticketBackground from "../assets/images/ticket-background.jpg";
import { useState } from "react";
import "../style/ticket.scss";
import TicketCarousel from "../components/TicketCarousel";
import { Link } from "react-router-dom";

const Ticket = () => {

  // Panggil API untuk initiate default ticket yang active
  const [ticket, setTicket] = useState(
    {
      type: "Presale 1",
      price: 120000,
      quota: 100
    }
  );
  const [quantity, setQuantity] = useState(0);
  
  // Panggil API untuk initiate default ticket yang active
  const [activeTicket, setactiveTicket] = useState('Presale 1')

  const handleIncrementQuantity = () => {
    if(quantity == 5){
      return;
    }
    setQuantity(quantity+1);
  };

  const handleDecrementQuantity = () => {
    if(quantity == 0){
      return;
    }
    setQuantity(quantity-1);
  };  

  return (
    <div className="ticket-container bg-cover bg-no-repeat min-h-screen" style={{backgroundImage: `url(${ticketBackground})`}}>
      <div className="m-auto z-10">
        <div className="heading text-center py-12 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Tickets</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Tickets</h1>
        </div>
        <div className="w-full">
        <TicketCarousel activeTicket={activeTicket} setTicket={setTicket} />
        </div>

        <div className="flex flex-col font-jakarta text-center text-main-2 gap-2">
          <p className="text-xl">{ticket?.type}</p>
          <p className="font-jakartaBold text-4xl">{ticket?.price}</p>
          <p className="text-sm">*max 5 tickets for once transaction</p>
          <div className="flex flex-row flex-wrap justify-center items-center mt-5 gap-5">
            <div className="flex flex-row items-center justify-between gap-10 w-40 bg-main-2 rounded-full px-5 py-2 text-main-1 font-jakartaBold">
              <button disabled={ticket.type == activeTicket ? false : true} onClick={handleDecrementQuantity}>-</button>
              {quantity}
              <button disabled={ticket.type == activeTicket ? false : true} onClick={handleIncrementQuantity}>+</button>
            </div>
            <Link to={"/ticket-form"} state={{ type: ticket.type, price: ticket.price, quota: ticket.quota, quantity: quantity }}><button disabled={quantity > 0 ? false : true} className={`w-40 px-5 py-2 text-main-2 rounded-full ${quantity > 0 ? "bg-main-3" : "bg-gray-500"} `}>Checkout</button></Link>
          </div>
          { quantity > 0 && <p className="mt-5">{quantity} x Rp {ticket?.price} = Rp {quantity * ticket?.price}</p>}
        </div>

      </div>
    </div>
  );
}
 
export default Ticket;