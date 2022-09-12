import { createPortal } from "react-dom";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import "../style/components/oy-cashier.scss";

const OyCashier = ({onCloseCashier, isOpenCashier}) => {

  const handleRedirect = () => {
    onCloseCashier();
  }

  return createPortal(
    <AnimatePresence>
    {isOpenCashier && (
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
          className={`z-50 relative border-main-2 ${isOpenCashier ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="h-screen py-10 flex justify-center items-center">
            <iframe className="relative z-50 h-full rounded-xl" src="https://pay-stg.oyindonesia.com/4fb837ee-ecd7-44df-b080-40a825cec093" frameBorder="0"></iframe>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>,
  document.getElementById("oy-cashier-container")
  );
}
 
export default OyCashier;