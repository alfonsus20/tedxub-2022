import { useNavigate } from "react-router-dom";
import background from "../assets/images/about/background.jpg";
import ticket from "../assets/images/payment-failed-ticket.png";
import Illustration from "../assets/images/payment-success-illustration.png";
import "../style/payment-failed.scss";

const PaymentFailed = () => {

  let navigate = useNavigate();

  const handleRedirectHome = () => {
    return navigate("/");
  }

  const handleRedirectTryAgain = () => {
    return navigate("/ticket");
  }

  return (
    <div className="payment-failed min-h-screen w-full bg-cover bg-no-repeat bg-[#353535] flex flex-col flex-wrap gap-10 justify-center items-center" style={{ backgroundImage: `url("${background}")` }}>
      <div className="flex flex-col justify-center px-10 gap-10">
        <div className="flex flex-col gap-2 text-left md:text-center">
          <h1 className="font-akira text-main-2 text-4xl">PAYMENT <span className="text-main-3">FAILED</span></h1>
          <p className="font-sedgwick text-main-2 text-2xl">Ops.. maybe something went wrong!</p>
          <p className="font-jakarta text-main-2 mt-2">Your transaction has failed due to some technical error. Try again.</p>
        </div>
        <img className="ticket h-56 m-auto" src={ticket} alt="Location" />
        <div className="flex justify-center gap-5">
          <button onClick={handleRedirectHome} className="bg-main-2 text-main-1 hover:bg-gray-500 hover:text-main-2 duration-200 drop-shadow-lg px-10 py-2 font-jakartaBold rounded-full">Back To Home</button>
          <button onClick={handleRedirectTryAgain} className="bg-main-3 text-main-2 hover:bg-main-2 hover:text-main-3 duration-200 drop-shadow-lg px-10 py-2 font-jakartaBold rounded-full">Try Again</button>
        </div>
      </div>
    </div>
  );
}
 
export default PaymentFailed;