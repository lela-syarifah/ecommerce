import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Product from "./pages/ProductDisplay";
// import ShopingCart from "./pages/ShopingCart";
import About from "./pages/About";
import Contact from "./pages/Contact";

ReactDOM.render(
  <div id="App">
    <Router>
      <Header />
      <div id="page-container">
        {/* <div id=""> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/product" component={Product} />
          {/* <Route path="/cart" component={ShopingCart} /> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* </div> */}
        <Footer />
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
