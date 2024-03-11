import React from "react";

const Jumbotron = () => {
    return (
        <div className="card bg-light" style={{ margin: "8px" }}>
            <div className="card-body">
                <div className="jumbotron">
                    <h1 className="display-4">A warm Welcome!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;