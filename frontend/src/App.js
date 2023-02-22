import React from "react";

// Components
import navbar from "./components/navbar";

// Pages
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <navbar />
      <h1>Hello</h1>
      <Home />
    </div>
  );
}

export default App;
