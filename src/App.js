import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './App.scss';
import Company from "./pages/Company/company";
import About from "./pages/AboutUs/about";
import Service from "./pages/Service/service";
import Partnership from "./pages/Partnership/partnership";
import SignIn from "./pages/Signin/signin";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Company />} />
       <Route path="/about" element={<About />} />
       <Route path="/service" element={<Service />} />
       <Route path="/partnership" element={<Partnership />} />
       <Route path="/signin" element={<SignIn />} />
  </Routes>
  </Router>
  );
}

export default App;
