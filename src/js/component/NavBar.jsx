import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#" style={{ paddingLeft: "10px", fontWeight: "bold", color: "white" }}>Landing Page with React!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: "white" }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: "#CCCCCC" }}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: "#CCCCCC" }}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: "#CCCCCC" }}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
