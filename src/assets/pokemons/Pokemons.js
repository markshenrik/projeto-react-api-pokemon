import React, { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import {ThemeContext} from '../context/ThemeContext.js'
import {ThemeTogglerButton} from '../context/ThemeTogglerButton.js'
import styled from 'styled-components'

const Pokemons = () => {
  const url = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemonsList, setPokemonsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const promises = [];
      for (let i = 1; i <= 10; i++) {
        promises.push(fetch(url(i)).then((res) => res.json()));
      }
      const pokemons = await Promise.all(promises);
      setPokemonsList(pokemons);
      setIsLoading(false); // define como false assim que a lista de pokemons é carregada
    };
    fetchData();
  }, []);
  
  const fetchMoreData = async () => {
    setIsLoadingMore(true); // define como true quando o botão é clicado
    for (let i = pokemonsList.length + 1; i <= pokemonsList.length + 10; i++) {
      const res = await fetch(url(i));
      const newPokemon = await res.json();
      setPokemonsList((prevList) => [...prevList, newPokemon]);
    }
    setIsLoadingMore(false); // define como false quando a lista de pokemons adicionais é carregada
  };
 

  const {theme} = useContext(ThemeContext)

  return  (
    <MainContainer style={{color: theme.color, backgroundImage: theme.background}}>
      <HeaderComponent>Pokemon Api React Project</HeaderComponent>
      <ThemeTogglerButton />
      {isLoading && !isLoadingMore && <LoadingDiv>Loading...</LoadingDiv>}
      <PokemonsList>
        {pokemonsList.map((pokemon) => {
          return (
              <PokemonItem key={pokemon.id}>
                <PokemonLink to={`/pokemon/${pokemon.id}`}>
                <PokemonDiv>
                  <PokemonImage className="pokemonIcon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="imagem do pokemon" />
                </PokemonDiv>
                </PokemonLink>
                <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>  
              </PokemonItem>
          );
        })}
      </PokemonsList>
      <ButtonContainer>
        <FetchButton style={{color: theme.buttonColor, backgroundColor: theme.buttonBackground}} onClick={fetchMoreData}>Carregar Mais</FetchButton>  
      </ButtonContainer>    
    </MainContainer>
  );
};
const ButtonContainer = styled.div`
  text-align: center;
`;

const LoadingDiv = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  text-align: center;
  margin: 5vw;
  font-size: 5vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media(min-width: 768px) {
    margin: 3rem;
    font-size: 4rem;
  }
`;

const MainContainer = styled.main`
  font-family: 'Ubuntu', sans-serif;
`

const FetchButton = styled.button`
  padding: 10px;
  border-radius: 30px;
  font-size: 20px;
  margin: 30px 0;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  cursor: pointer;
`

const HeaderComponent = styled.h1`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  padding: 30px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
`
const PokemonImage = styled.img`
  max-width: 100%;
  width: 9em;
`

const PokemonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const PokemonDiv = styled.div`
  height: 12.5em;
  width: 12.5em;
  margin: auto;
  padding: 25px; 
  border: 2px solid black;
  border-radius: 100%;
  background-image: linear-gradient(to bottom, red 50%, black 53%, white 55%); 
`
const PokemonItem = styled.li`
  margin: 10px 35px 20px;
  text-align: center;
`
const PokemonLink = styled(Link)` 
  margin: 120px;
`
const PokemonName = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`


export default Pokemons;
