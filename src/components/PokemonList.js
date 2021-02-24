import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokemonList.css'



class PokemonList extends React.Component {
    render() {
       console.log(this.props.pokemons);
      const item = this.props.pokemons.map((pokemonItem,i)=>{return(
        
           <li className="list"  key={i}>
               { <Pokemon pokemonProp ={pokemonItem}  /> }
            </li>
      )
      });
      return (
        <div>
            <h3>Mi lista de pokemons</h3>
            <ul className="gridList">{item}</ul>
        </div>
      );
    }
  }
  export default PokemonList;