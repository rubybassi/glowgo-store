import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Brand from "./pages/Brand";
import Category from "./pages/Category";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Container from '@material-ui/core/Container';
import { AuthenticatedRoute } from "./hooks/AuthRoute";

function App() {
  return (
      <Router>
        <NavBar />
        <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/all" component={ProductList} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/product/brand/:id" component={Brand} />
          <Route exact path="/product/category/:id" component={Category} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <AuthenticatedRoute exact path="/user/order/:id" component={Order} />
          <AuthenticatedRoute exact path="/user/checkout" component={Checkout} />
        </Switch>
        </Container>
        <Footer />
      </Router>
  );
}

export default App;
