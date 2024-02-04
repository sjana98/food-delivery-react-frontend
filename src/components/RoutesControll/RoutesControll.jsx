import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

function RoutesControll() {
    const auth = localStorage.getItem("user");
    return auth ? <Outlet/> : <Navigate to = "/Signup"/>
};

export default RoutesControll