import React from "react";
import { FaSkull, FaHeartbeat, FaQuestion } from "react-icons/fa";
import { CharacterType } from "../../api";
import "./style.scss";

type CardProps = {
  item: CharacterType;
};

const Card = ({ item }: CardProps) => {
  const getIcon = (species: string) => {
    switch (species) {
      case "Alive":
        return <FaHeartbeat />;
      case "Dead":
        return <FaSkull />;
      case "unknown":
        return <FaQuestion />;
    }
  };

  return (
    <div className="card">
      <img src={item.image} alt="" className="thumbnail" />
      <span className="name">{item.name}</span>
      <div className="info">
        <span>{item.species}</span> -{" "}
        <span className="status">
          {item.status}
          {getIcon(item.status)}
        </span>
      </div>
    </div>
  );
};

export default Card;
