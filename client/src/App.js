import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Brand from "./pages/Brand";
import Category from "./pages/Category";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <TopBar/>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={ProductList} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/product/brand/:id" component={Brand} />
          <Route exact path="/product/category/:id" component={Category} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/order" component={Order} />
          <Route exact path="/user/checkout" component={Checkout} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
