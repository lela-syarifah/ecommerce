import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductAdmin from "./views/pages/ProductAdmin";
import ContactAdmin from "./views/pages/ContactAdmin";
import AboutAdmin from "./views/pages/AboutAdmin";
import Profile from "./views/pages/Profile";
import BlogAdmin from "./views/pages/BlogAdmin";
import Home from "./views/Home/Home";
import Product from "./views/Product/ProductDisplay";
import Blog from "./views/Blog/Blog";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Admin from "./views/pages/DashboardAdmin";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import SetRefresh from "./views/pages/setRefresh";

ReactDOM.render(
  <div id="App">
    <Router>
      <div className="page-container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboardAdmin" component={Admin} />
          <Route path="/productAdmin" component={ProductAdmin} />
          <Route path="/aboutAdmin" component={AboutAdmin} />
          <Route path="/contactAdmin" component={ContactAdmin} />
          <Route path="/blogAdmin" component={BlogAdmin} />
          <Route path="/profileAdmin" component={Profile} />
          {/* <Route
            path="/setRefresh"
            component={SetRefresh}
            setRefresh={setRefresh}
            isRefresh={isRefresh}
          /> */}
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/product" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </div>
        </Switch>
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
