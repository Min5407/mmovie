import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/nav.component";
import Header from "./components/header/header.component";
import RowSection from "./section/rowSection/rowSection.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <RowSection />
    </div>
  );
}

export default App;
