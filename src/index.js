import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./layouts/main-page";
import SingleProduct from "./components/products/singleProduct-page";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
		        <Route path="/home" element={<Home />}/>
                <Route exact path="/product/:productId" element={<SingleProduct/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
