import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
