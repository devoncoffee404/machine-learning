import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import RoutesConfig from "./routes";

function App() {
  return (
    <>
      <Header />
      <div className="body-content">
        <RoutesConfig />
      </div>
    </>
  );
}

export default App;
