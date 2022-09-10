import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import MeetTheTeam from "./pages/MeetTheTeam";
import Ticket from "./pages/Ticket";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <div className={pathname === "/" ? "hidden" : ""}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/ticket" element={<Ticket />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
