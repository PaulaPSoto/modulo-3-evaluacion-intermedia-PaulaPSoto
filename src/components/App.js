import React from 'react';
import PokemonList from './PokemonList';
import pokemons from '../data/data.json';


class App extends React.Component {
    render() {
       console.log("Todos los pokemons");
       console.log(pokemons);
      return (
          <PokemonList pokemons={pokemons} />
          
      );
      
    }
  }
  export default App;