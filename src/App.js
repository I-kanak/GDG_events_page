import React from "react";
import EventList from "./components/Eventlist";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <EventList />
      <Footer />
    </div>  
  );
}

export default App;

