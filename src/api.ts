import axios from "axios";

export type CharacterType = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
};

class Api {
  client = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
  });

  async getCharacters(): Promise<CharacterType[]> {
    const response = await this.client.get("character");
    // @ts-ignore
    const characters = response?.data?.results as CharacterType[];
    console.log(characters);
    return characters;
  }
}

export default new Api();
