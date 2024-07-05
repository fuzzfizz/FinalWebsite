import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Card = ({ im }) => {
  return (
    <div className="card m-3" style={{ width: '25rem', }}>
      <img src={im} className="card-img-top" alt="..." height={300} />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
};

export default Card;

