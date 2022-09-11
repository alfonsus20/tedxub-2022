import { createPortal } from "react-dom";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import check from "../assets/images/payment-success-check.svg";
import background from "../assets/images/payment-success-background.png";
import { useNavigate } from "react-router-dom";

const PaymentSuccessModal = ({ onClose, isOpen }) => {

  let navigate = useNavigate();

  const handleRedirect = () => {
    onClose();
    return navigate("/ticket");
  }

  return createPortal(
    <AnimatePresence>
    {isOpen && (
      <motion.div
        className={cn(
          "z-30 flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 shadow-lg"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute bg-black bg-opacity-50 w-full h-full"
          onClick={handleRedirect}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`z-50 relative bg-main-1 rounded-xl border-main-2 border-2 w-96 h-96 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <img className="absolute bottom-0 -z-50" src={background} alt="" />
          <div className="flex flex-col justify-between items-center h-full p-10 text-main-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <img className="w-14 mb-3" src={check} alt="Check" />
              <h1 className="font-akira">PAYMENT SUCCESSFUL</h1>
              <p className="font-jakarta text-sm">See you on the stage</p>
            </div>
            <button onClick={handleRedirect} className="bg-main-3 drop-shadow-lg px-12 py-2 font-jakartaBold rounded-full">Ok</button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>,
  document.getElementById("payment-success-modal-container")
  );
};
export default PaymentSuccessModal;
