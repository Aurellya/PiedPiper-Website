import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/About/About";
import News from "./components/pages/News/News";
import JoinUs from "./components/pages/JoinUs/JoinUs";
import Footer from "./components/pages/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/joinus" component={JoinUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
