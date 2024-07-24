import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/Home";


import Services from "./components/services";
import "./styles/App.scss";
import "./styles/colors.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/mediaquery.scss";
import "./styles/services.scss";



function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/services"
        element = { < Services / > }
        /> <
        /Routes> <
        Contact / >
        <
        Services / >
        <
        Footer / >
        <
        /Router> <
        /div>
    );
}

export default App;