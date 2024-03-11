import React from "react";

const Card = () => {
    return (
        <div className="card mb-3" style={{ width: "100%" }}>
            <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <hr></hr>
                <a href="#" className="btn btn-primary">Find out more</a>
            </div>
        </div>
    );
};

export default Card;
