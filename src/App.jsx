import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import MeetTheTeam from "./pages/MeetTheTeam";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
