import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import "./style.scss";
import Api, { CharacterType } from "../../api";
import { isTypeElement } from "typescript";

const AllCharacters = (): JSX.Element => {
  const [data, setData] = useState<CharacterType[]>([]);

  const loadCharacters = async () => {
    const characters = await Api.getCharacters();
    setData(characters);
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="container">
      <Header />
      <section>
        <h2>All Characters</h2>
      </section>
      <div className="grid">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllCharacters;
