// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import { PaintingPage } from "./components/Pages/PaintingPage/PaintingPage";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Login from "./components/Pages/Login/Login";
import EventsPage from "./components/Pages/Events/EventsPage";

import Header from "./components/Common/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/painting" element={<PaintingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
}

export default App;
