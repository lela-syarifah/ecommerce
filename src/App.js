import React from "react";
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
import SetRefresh from "./views/pages/setRefresh";
import { useState } from "react";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);

  const setRefresh = (status) => {
    setIsRefresh(status);
  };
  return (
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
            <Route
              path="/setRefresh"
              component={SetRefresh}
              setRefresh={setRefresh}
              isRefresh={isRefresh}
            />
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
    </div>
  );
}

export default App;
