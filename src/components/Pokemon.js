import React from 'react';
import '../stylesheets/Pokemon.css';


const Pokemon =(props)=>{
    const itemTypes = props.pokemonProp.types.map((onepokemon,index)=>{return(
        <span key={index} className="listtypes">
            {onepokemon}
        </span>)
        
       });
    return(
        <div className="card">
          <img 
          className="imgPokemon"
          src={props.pokemonProp.url}
          alt="pokemon image"
          title="pokemon image"/>
            <h2>{props.pokemonProp.name}</h2>
         
            <div>
                {itemTypes}
           </div>
        </div>
    )

}
export default Pokemon;

    