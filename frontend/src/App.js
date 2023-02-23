import React from "react";
import "./Style/style.css";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
