import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Delivery from "./Delivery.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Slider from "./Slider"
import Terms from "./TermsAndConditions.js"
import Books from "./Books.js";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/delivery"><Delivery /></Route>
        <Route exact path="/about-us"><About /></Route>
        <Route exact path="/contact-us"><Contact /></Route>
        <Route exact path="/terms-conditions"><Terms /></Route>
      </Switch>
      <Slider/>
      <Books/>
    </div>
  );
}

export default App;
