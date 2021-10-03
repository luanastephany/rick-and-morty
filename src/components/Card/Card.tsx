import React from "react";
import { FaSkull } from "react-icons/fa";
import "./style.scss";

const Card = () => {
  return (
    <div className="card">
      <img src="" alt="" className="thumbnail" />
      <span className="name">Rick Sanches</span>
      <div className="info">
        <span>Human</span> - <span>Alive</span>
        <FaSkull />
      </div>
    </div>
  );
};

export default Card;
