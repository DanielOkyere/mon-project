import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
    Home,
    SignUp,
    Signin,
    ChoicePage
} from "./layouts";
import {
    SingleProduct,
} from "./components";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PropertyPage from "./layouts/property-pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChoicePage />} />
                <Route path="/home" element={<Home />} />
                <Route
                    exact
                    path="/product/:productId"
                    element={<SingleProduct />}
                />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route exact path="/create-posting" element={<PropertyPage />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
