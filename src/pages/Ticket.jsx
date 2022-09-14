import ticketBackground from "../assets/images/ticket-background.jpg";
import { useEffect, useState } from "react";
import "../style/ticket.scss";
import TicketCarousel from "../components/TicketCarousel";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import useDisclosure from "../hooks/useDisclosure";

const Ticket = () => {
  let navigate = useNavigate();
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Panggil API untuk initiate default ticket yang active
  const [selectedTicket, setSelectedTicket] = useState(
    {
      type: "Presale 1",
      price: 120000,
      quota: 2
    }
  );
  const [quantity, setQuantity] = useState(0);
  
  // Panggil API untuk initiate default ticket yang active
  const [activeTicket, setactiveTicket] = useState('Presale 1')
  const [alertStatus, setAlertStatus] = useState('');

  const handleOpenAlert = () => {
    onOpen();
    const timeoutAlert = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timeoutAlert)
    }
  };

  const handleCloseAlert = () => {
    onClose();
  };

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

  const handleCheckout = () => {
    // handleCloseNavbar();
    if(quantity <= selectedTicket.quota){
      return navigate("/ticket-form", { state: { type: selectedTicket.type, price: selectedTicket.price, quota: selectedTicket.quota, quantity: quantity } });
    } else {
      handleOpenAlert();
    }
  };

  useEffect(() => {
    setQuantity(0);
  }, [selectedTicket]);

  useEffect(() => {
    if(selectedTicket.quota > 0 && quantity > selectedTicket.quota){
      setAlertStatus(`Maaf, tiket tersisa ${selectedTicket.quota} lagi.`);
    } else if (selectedTicket.quota <= 0){
      setAlertStatus('Maaf, tiket sudah habis.');
    }
  }, [quantity])
  
  return (
    <div className="ticket-container bg-cover bg-no-repeat min-h-screen bg-[#1D1B21]" style={{backgroundImage: `url(${ticketBackground})`}}>
      <div className="m-auto z-10">
        <div className="heading text-center py-12 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Tickets</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Tickets</h1>
        </div>
        <div className="w-full">
        <TicketCarousel activeTicket={activeTicket} setSelectedTicket={setSelectedTicket} />
        </div>

        <div className="flex flex-col font-jakarta text-center text-main-2 gap-2">
          <p className="text-xl">{selectedTicket?.type}</p>
          <p className="font-jakartaBold text-4xl">Rp {selectedTicket?.price}</p>
          <p className="text-sm">*max 5 tickets for once transaction</p>
          <div className="flex flex-row flex-wrap justify-center items-center mt-5 gap-5">
            <div className="flex flex-row items-center justify-between gap-10 w-40 bg-main-2 rounded-full px-5 py-2 text-main-1 font-jakartaBold">
              <button disabled={selectedTicket.type == activeTicket && selectedTicket.quota > 0 ? false : true} onClick={handleDecrementQuantity}>-</button>
              {quantity}
              <button disabled={selectedTicket.type == activeTicket && selectedTicket.quota > 0 ? false : true} onClick={handleIncrementQuantity}>+</button>
            </div>
            <button onClick={handleCheckout} disabled={quantity > 0 ? false : true} className={`w-40 px-5 py-2 text-main-2 rounded-full ${quantity > 0 ? "bg-main-3 hover:bg-main-2 hover:text-main-3 duration-200" : "bg-gray-500"} `}>Checkout</button>
          </div>
          { quantity > 0 && <p className="mt-5">{quantity} x Rp {selectedTicket?.price} = Rp {quantity * selectedTicket?.price}</p>}
        </div>
        <Alert alertStatus={alertStatus} isOpenAlert={isOpen} onCloseAlert={handleCloseAlert} />
      </div>
    </div>
  );
}
 
export default Ticket;