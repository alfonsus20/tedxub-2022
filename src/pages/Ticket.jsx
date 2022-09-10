import ticketBackground from "../assets/images/ticket-background.jpg";
import { useEffect, useState } from "react";
import "../style/ticket.scss";
import TicketCarousel from "../components/TicketCarousel";

const Ticket = () => {

  const [ticket, setTicket] = useState([
    {
      type: "Presale 1",
      price: 120000,
      quota: 100
    }
  ]);
  const [quantity, setQuantity] = useState(0);

  const handleIncrementQuantity = () => {
    if(quantity == 5){
      return;
    }
    setQuantity(quantity+1);
  }

  const handleDecrementQuantity = () => {
    if(quantity == 0){
      return;
    }
    setQuantity(quantity-1);
  }

  useEffect(() => {
    setTicket({
      type: "Presale 1",
      price: 120000,
      quota: 100
    })
  }, [])
  

  return (
    <div className="ticket-container bg-cover bg-no-repeat min-h-screen" style={{backgroundImage: `url(${ticketBackground})`}}>
      <div className="m-auto z-10">
        <div className="heading text-center py-12 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Tickets</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Tickets</h1>
        </div>
        <div className="w-full">
        <TicketCarousel setTicket={setTicket} />
        </div>

        <div className="flex flex-col font-jakarta text-center text-main-2 gap-2">
          <p className="text-xl">{ticket?.type}</p>
          <p className="font-jakartaBold text-4xl">{ticket?.price}</p>
          <p className="text-sm">*max 5 tickets for once transaction</p>
          <div className="flex flex-row flex-wrap justify-center items-center mt-5 gap-5">
            <div className="flex flex-row items-center justify-between gap-10 w-40 bg-main-2 rounded-full px-5 py-2 text-main-1 font-jakartaBold">
              <button onClick={handleDecrementQuantity}>-</button>
              {quantity}
              <button onClick={handleIncrementQuantity}>+</button>
            </div>
            <button className="bg-main-3 w-40 px-5 py-2 text-main-2 rounded-full">Checkout</button>
          </div>
          { quantity > 0 && <p className="mt-5">{quantity} x Rp 105.000 = Rp {quantity * 105000}</p>}
        </div>

      </div>
    </div>
  );
}
 
export default Ticket;