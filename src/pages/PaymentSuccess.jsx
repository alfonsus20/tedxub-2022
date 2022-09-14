import { useNavigate } from "react-router-dom";
import background from "../assets/images/about/background.jpg";
import ticketSuccess from "../assets/images/payment-success-background.png";
import check from "../assets/images/payment-success-check.svg";
import useDisclosure from "../hooks/useDisclosure";

const PaymentSuccess = () => {
  const { isOpen, isOpenCashier, onOpen, onOpenCashier, onClose, onCloseCashier } = useDisclosure();

  let navigate = useNavigate();

  const handleRedirect = () => {
    onClose();
    return navigate("/ticket");
  }
  
  return (
    <div className="min-h-screen w-full bg-cover bg-no-repeat bg-[#353535] flex justify-center items-center" style={{ backgroundImage: `url("${background}")` }}>
      <div className={`z-50 relative bg-main-1 rounded-xl border-main-2 border-2 w-96 h-96`}>
        <img className="absolute bottom-0 -z-50" src={ticketSuccess} alt="" />
        <div className="flex flex-col justify-between items-center h-full p-10 text-main-2 text-center">
          <div className="flex flex-col justify-center items-center">
            <img className="w-14 mb-3" src={check} alt="Check" />
            <h1 className="font-akira">PAYMENT SUCCESSFUL</h1>
            <p className="font-jakarta text-sm">See you on the stage</p>
          </div>
          <button onClick={handleRedirect} className="bg-main-3 drop-shadow-lg px-12 py-2 font-jakartaBold rounded-full">Ok</button>
        </div>
      </div>
    </div>
  );
}
 
export default PaymentSuccess;