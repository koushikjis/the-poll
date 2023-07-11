import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import CurrentPolls from "./components/CurrentPolls";
import CreatePoll from "./components/CreatePoll";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import MyPollPage from "./components/MyPollPage";

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
        <Route
          path="/mypoll"
          element={
            <MyPollPage
              candidates={[
                {
                  id: "1",
                  photo: require("./asset/candidate1.jpg"),
                  name: "Rhino",
                  votes: 10,
                },
                {
                  id: "2",
                  photo: "/asset/candidate2.jpg",
                  name: "Candidate 2",
                  votes: 5,
                },
                {
                  id: "3",
                  photo: "/asset/candidate3.jpg",
                  name: "Candidate 3",
                  votes: 2,
                },
              ]}
              onVote={function (candidateId: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
