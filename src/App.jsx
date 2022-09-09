import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Faq from "./pages/faq";

function App() {
  return (
    <Router>
      <main className="overflow-y-hidden max-h-screen">
        <Routes>
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
