//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import NavBar from "./component/NavBar.jsx"; // Import NavBar component
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
ReactDOM.render(
    <div>
        <NavBar />
        <Jumbotron />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mx-1 mt-4">
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
        </div>
        <Footer />
    </div>,

    document.querySelector("#app")
);