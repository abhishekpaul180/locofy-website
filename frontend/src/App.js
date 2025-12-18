import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TermsOfService from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import EULA from "./components/EULA";
import DeleteAccount from "./components/DeleteAccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/eula" element={<EULA />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;