import { useNavigate } from "react-router-dom";
import background from "../assets/images/about/background.jpg";
import location from "../assets/images/payment-success-location.png";
import Illustration from "../assets/images/payment-success-illustration.png";
import "../style/payment-success.scss";
import { Helmet } from "react-helmet";

const PaymentSuccess = () => {

  let navigate = useNavigate();

  const handleRedirect = () => {
    return navigate("/");
  }
  
  return (
    <div className="payment-success min-h-screen w-full bg-cover bg-no-repeat bg-[#353535] flex flex-row flex-wrap gap-10 justify-around items-stretch" style={{ backgroundImage: `url("${background}")` }}>
      <Helmet>
        <title>Payment Success</title>
        <meta name="description" content="Payment Success" />
      </Helmet>
      <div className="flex flex-col justify-center px-10 gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-akira text-main-2 text-4xl">PAYMENT SUCCESSFUL</h1>
          <p className="font-sedgwick text-main-3 text-2xl">See you on the venue!</p>
        </div>
        <img className="w-128" src={location} alt="Location" />
        <div className="flex justify-center mt-5">
          <button onClick={handleRedirect} className="bg-main-3 text-main-2 hover:bg-main-2 hover:text-main-3 duration-200 w-52 drop-shadow-lg px-10 py-2 font-jakartaBold rounded-full">Back To Home</button>
        </div>
      </div>
      <div className="px-0 md:px-10 flex justify-end items-end">
        <img className="check h-fit" src={Illustration} alt="Success" />
      </div>
    </div>
  );
}
 
export default PaymentSuccess;