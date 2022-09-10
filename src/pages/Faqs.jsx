import FaqBackground from "../assets/images/faq-background.png"
import Accordion from "../components/Accordion";

const Faqs = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-no-repeat" style={{backgroundImage: `url(${FaqBackground})`}}>
      <div className="container m-auto">
        <div className="heading text-center py-12 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-20">FAQ</h1>
          <h1 className="font-akira text-main-1 text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">FAQ</h1>
        </div>
        <Accordion />
      </div>
    </div>
  );
}
 
export default Faqs;