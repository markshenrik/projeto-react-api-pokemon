import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
import {ThemeContext} from '../context/ThemeContext.js';
import {ThemeTogglerButton} from '../context/ThemeTogglerButton.js';
import HeaderComponent from '../header/HeaderComponent.js';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const {theme} = useContext(ThemeContext);
  const [abilitiesInfo, setAbilitiesInfo] = useState({});

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const fetchData = async () => {
      const res = await fetch(url);
      const pokemonData = await res.json();
      setPokemon(pokemonData);
      const abilities = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`).then((res) => res.json())
      const abilitiesData = await abilities.effect_entries[1].effect
      setAbilitiesInfo(abilitiesData.replace(/\n/g, " "))
    };
    fetchData();
  }, [id]);


  return (
    <div style={{background: `linear-gradient(180deg, hsla(220, 18%, 93%, 1) 0%, hsla(0, 0%, 100%, 1) 16%, hsla(236, 14%, 21%, 1) 43%)`}}>
      <HeaderComponent />
      <ThemeTogglerButton />
      {pokemon ? (
        <>
          <PanelContent style={{color: theme.color, backgroundImage: theme.background, borderColor: theme.color }}>
            <PokemonCardContainer>
              <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
              <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
            </PokemonCardContainer>
            <PokemonData>
              <List>
                <NameItems>Moves</NameItems>
                <DisplayItems>
                  {pokemon.moves.slice(0, 10).map(move => (
                    <ListItem key={move}>{move.move.name}</ListItem>
                  ))}
                </DisplayItems>
              </List>
              <List>
                <NameItems>Abilities</NameItems>
                <DisplayItems>
                  {pokemon.abilities.map((ability, index) => (
                    <ListItem key={index}>{ability.ability.name}</ListItem>
                  ))}
                  <AbilityDescription>{JSON.stringify(abilitiesInfo)}</AbilityDescription>
                </DisplayItems>
              </List>
              <List>
                <NameItems>Types</NameItems>
                <DisplayItems>
                  {pokemon.types.map((type, index) => (
                    <ListItem key={index}>{type.type.name}</ListItem>
                  ))}
                </DisplayItems>
              </List>
            </PokemonData>
            <StyledLink style={{color: theme.color, backgroundColor: theme.background, borderColor: theme.color}} to='/'>Voltar aos Pokemons</StyledLink>
          </PanelContent>
        </>
      ) : (
        <LoadingDiv>Loading...</LoadingDiv>
      )}
    </div>
  );
} 


const LoadingDiv = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  text-align: center;
  margin: 5vw;
  font-size: 5vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  color: #ffffff;
  @media(min-width: 768px) {
    margin: 3rem;
    font-size: 4rem;
  }
`;



const List = styled.ul`
  > * {
    margin: 2rem 0;
  }
`;

const DisplayItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: black;
  font-size: 1rem;
  border: 5px groove #e70319;
  @media(max-width: 1200px){        
    width: 90%;
    margin: 5%;
  }
`

const PokemonName = styled.h1`
  font-weight: 700;
  margin-bottom: 20px;
  @media(max-width: 450px){
    margin: 0 10%;
    font-size: 1.5em;
}
`
const NameItems = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`

const AbilityDescription = styled.p`
  max-width: 100%;
  width: 500px;
  text-align: center;
  margin: auto;
  font-weight: 500;
  @media(max-width: 600px){
    width: auto;
    max-width: 100%;
}`

const PokemonCardContainer = styled.div`
  text-align: center;
  margin: 3rem;
  margin-top: 15rem;
  height: 400px;
  border: 5px groove #e70319;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(180deg, hsla(220, 18%, 93%, 1) 0%, hsla(0, 0%, 100%, 1) 5%, hsla(236, 14%, 21%, 1) 80%);
  @media(max-width: 1350px){
    margin: auto;
    margin-top: 2rem;   
}
`

const PokemonData = styled.div`
  text-align: center;
  margin-left: 10%;
  @media(max-width: 1350px){
    margin: auto;
  }
`

const PanelContent = styled.div`
  border: 3px solid black;
  border-radius: 20%;
  border: 5px groove #e70319;
  display: flex;
  margin: 5% 10% 0 10%;
  font-family: 'Ubuntu', sans-serif;
  flex-wrap: wrap;
  > * {
  flex-basis: 350px;
  };
  @media(max-width: 1350px){
    flex-direction: column;
  }
  @media(max-width: 750px){
    border-radius: 0;
  }
`

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 15.6em;
  margin: auto;
  margin-bottom: 1em;
  background-color: #e70319;
  padding: 0.9em;
  font-weight: 300;
  font-size: 25px;
  border: 2px solid black;
  border-radius: 25%;
  flex-basis: 10%;
  &:hover{
      color: black;
      background-color: black;
      text-decoration: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  };
   &:visited {
    text-decoration: none;
    color: black;
  }
  @media(max-width: 1350px){
    display: block;
    margin: auto;
    margin-bottom: 10px;
    text-align: center;
  }
`
const PokemonImage = styled.img`
  max-width: 100%;
  width: 20rem;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.8));
  @media(max-width: 600px){
    width: 50vw;
  }
`
const ListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  margin: 25px 10px;
  font-weight: 500;
  text-align: center;
  @media(max-width: 500px){    
    width: 100px;
  }
`
      
export default PokemonDetails
