import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Create from "./components/create/Create";
import FoodItems from "./components/foodItems/FoodItems";
import FoodCatalog from "./components/foodCatalog/FoodCatalog";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import LoginPassword from "./components/loginPasswordChange/LoginPassword";
import RoutesControll from "./components/RoutesControll/RoutesControll";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/passwordChange" element={<LoginPassword />} />

        <Route element={<RoutesControll />}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/foodItems" element={<FoodItems />} />
          <Route path="/foods/:name" element={<FoodCatalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
