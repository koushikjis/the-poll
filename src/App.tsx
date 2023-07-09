import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import CurrentPolls from "./components/CurrentPolls";
import CreatePoll from "./components/CreatePoll";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/current-polls" element={<CurrentPolls />} />
      <Route path="/create-poll" element={<CreatePoll />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
