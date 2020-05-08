import React from "react";
import { Link } from "react-router-dom"
import "./HorizontalScrollScar.css";

const Card = ({ cardHeader, cardIcon, cardText, ...rest }) => {
  return (
    <div className="horizontal-scroll-card" style={{ ...rest }}>
      <p className="card-header">{cardHeader}</p>
      <p>{cardText}</p>
      <Link to="/register">
        <button className="card-btn">
          Get Started for Free
        </button>
      </Link>
    </div>
  );
};

export default Card;
