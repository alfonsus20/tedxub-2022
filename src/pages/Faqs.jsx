import FaqBackground from "../assets/images/faq-background.jpg"
import Accordion from "../components/Accordion";
import { AnimatePresence, motion } from "framer-motion";

const Faqs = () => {
  return (
    <div className="w-full min-h-screen" style={{backgroundImage: `url(${FaqBackground})`}}>
      <div className="container m-auto">
        <div className="heading text-center mb-5 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-20">FAQ</h1>
          <h1 className="font-akira text-main-1 text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">FAQ</h1>
        </div>
        <AnimatePresence>
          <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", bounce: 0.25, duration: 1 }}
            >
          <Accordion />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
 
export default Faqs;