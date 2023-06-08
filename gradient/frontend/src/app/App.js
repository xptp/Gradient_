import React from "react";
import "../app/style/app.scss";

import NavBar from "./components/navBar";

import Header from "./components/header";
import Footer from "./components/footer";

import AnimatedRoutes from "./components/routes/animatedRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
