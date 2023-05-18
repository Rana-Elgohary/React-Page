import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
