import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import "./style.scss";

const AllCharacters = () => {
  return (
    <div className="container">
      <Header />
      <section>
        <h2>All Characters</h2>
      </section>
      <div className="grid">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
};

export default AllCharacters;
