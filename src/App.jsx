import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import RoutesControll from "./components/RoutesControll/RoutesControll";
import { useEffect } from "react";
import React, { Suspense, lazy } from "react";
import UserAccount from "./components/userAccount/UserAccount";
import Cooking from "./components/loadingPage/Cooking";
const Login = lazy(() => import("./components/login/Login"));
const LoginPassword = lazy(() => import("./components/loginPasswordChange/LoginPassword")); 
const Signup = lazy(() => import("./components/signup/Signup"));
const Home = lazy(() => import("./components/home/Home"));
const FoodItems = lazy(() => import("./components/foodItems/FoodItems"));
const Create = lazy(() => import("./components/create/Create"));
const FoodCatalog = lazy(() => import("./components/foodCatalog/FoodCatalog"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Checkout = lazy(() => import("./components/checkout/Checkout"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Suspense fallback={<Cooking />}>
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
            <Route path="/account" element={<UserAccount />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>

        <Footer />
      </Suspense>
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
