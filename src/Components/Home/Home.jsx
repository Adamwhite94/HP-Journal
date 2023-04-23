import React, { useState } from "react";
import {
  HomeContainer,
  HomeElements,
  HomeButton,
  HomeButtonContainer,
  HomeTitle,
  SettingsContainer,
  Card,
  CardElements,
  CardTitle,
  CardImage,
  CardInfoContainer,
  CardInfo
} from "./HomeStyles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Home() {
  const [settings, displaySettings] = useState(true);
  const [characterdata, setCharacterData] = useState([]);
  const [spelldata, setSpellData] = useState([]);
  const [characters, displayCharacters] = useState(false);
  const [spells, displaySpells] = useState(false);

  const { data } = useQuery(
    {
      queryKey: ["fetchCharacters"],
      queryFn: () =>
        axios
          .get("https://hp-api.onrender.com/api/characters")
          .then((res) => res.data),
          onSuccess: (data) => {
            setCharacterData(data);
          }
    },
    {
      enabled: characters,
    }
  );
  const { datasp } = useQuery(
    {
      queryKey: ["fetchSpells"],
      queryFn: () =>
        axios
          .get("https://hp-api.onrender.com/api/spells")
          .then((res) => res.data),
          onSuccess: (data) => {
            setSpellData(data);
          }
    },
    {
      enabled: spells,
    }
  );

  const submitHandler = () => {
    displaySettings(false);
  };
  return (
    <HomeContainer>
      <HomeElements>
        <HomeTitle>Harry Potter's Journal</HomeTitle>
        {settings ? (
          <SettingsContainer onSubmit={() => submitHandler()}>
            <HomeButtonContainer>
              <HomeButton type="submit" onClick={() => displayCharacters(true)}>
                Characters
              </HomeButton>
              <HomeButton type="submit" onClick={() => displaySpells(true)}>
                Spells
              </HomeButton>
            </HomeButtonContainer>
          </SettingsContainer>
        ) : null}

        {characters ? 
        <Card>
          <CardElements>
            {characterdata.map((character)=>{
              return(
                <CardInfoContainer  key={character.id}>
                <CardImage src={character.image}/>
                <CardTitle>{character.name}</CardTitle>
                </CardInfoContainer>
              )
            })}
          </CardElements>
        </Card>
        : null}
        {spells ? 
        <Card>
          <CardElements>
            {spelldata.map((spell)=>{
              return(
                <CardInfoContainer  key={spell.id}>
                <CardTitle>{spell.name}</CardTitle>
                </CardInfoContainer>
                
              )
            })}
          </CardElements>
        </Card>
        :null}
      </HomeElements>
    </HomeContainer>
  );
}

export default Home;
