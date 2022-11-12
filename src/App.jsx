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
import { Helmet } from "react-helmet";

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
      <Helmet titleTemplate="%s | TEDxUniversitasBrawijaya 2022 | Merayakan Kembali" defaultTitle="TEDxUniversitasBrawijaya | Merayakan Kembali">
        <meta 
          name="description" 
          content="Manusia dalam era kompleksitas atas modernitas yang tercipta hingga hari ini sejatinya memiliki 
          sistem pengetahuan yang berangkat dari nilai fundamental kesadaran sosial dan karakteristik dari pencermatan 
          keadaan sekitar yang terbangun melalui ekosistem interaksi antara manusia dan lingkungannya sejak awal. 
          Kebijaksanaan lokal ini sering terkesampingkan atau bahkan hilang di tengah gegap gempita produktivitas 
          dunia yang serba berkecepatan. Alih-alih bertanya pesatnya pembangunan disekitar kita, 
          sudahkah kita bertanya apa yang kita cermati dari lingkungan yang berkembang pesat? 
          Bagaimana kondisi diri kita dalam berpikir atas realitas terhadap kesadaran dan keadaan yang ada di luar? 
          TEDxUniversitasBrawijaya 2022 kali ini akan membawa penonton melalui perjalanan istirahat dari kejenuhan 
          dan kompleksitas yang telah terbentuk dengan kembali menjelajahi makna nilai kearifan lokal sebagai 
          ruang untuk kembali pada akar, mengambil bekal dalam menjalani era modernitas saat ini. 
          Penelusuran ini sebagai pengingat kepada kita tentang menghayati, mencerna, dan berkesadaran 
          secara total tentang nilai dasar tiap-tiap individu dan sekitarnya yang telah ada. 
          Karena apa yang kita cemaskan pada masa kini, ketidakpastian akan masa depan, 
          akan terjawab dengan kembali menelusuri makna masa lalu." 
        />
        <meta 
          name="keywords" 
          content="TEDxUniversitasBrawijaya 2022, TEDxUB 2022, TEDxUB, TEDx, TED, Merayakan Kembali, Menggeledah Arus Menilik Ruang" 
        />
        <meta name="authors" content="TEDxUniversitasBrawijaya 2022" />
      </Helmet>
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
