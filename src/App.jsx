import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import MeetTheTeam from "./pages/MeetTheTeam";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import SponsorPartner from "./pages/SponsorPartner";
import Ticket from "./pages/Ticket";
import TicketForm from "./pages/TicketForm";
import ReactGA from "react-ga";
import TicketConfirm from "./pages/TicketConfirm";
import PaymentFailed from "./pages/PaymentFailed";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [pathname]);

  return null;
};

ReactGA.initialize(import.meta.env.VITE_TRACKING_ID);

function App() {
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <ScrollToTop />
      {/* <div className={pathname === "/" ? "hidden" : ""}> */}
        <Navbar />
      {/* </div> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/ticket-form" element={<TicketForm />} />
          <Route path="/ticket-confirm" element={<TicketConfirm />} />
          <Route path="/sponsor-partner" element={<SponsorPartner />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
