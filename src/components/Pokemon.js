import React from 'react';
import '../stylesheets/Pokemon.css';


const Pokemon =(props)=>{
    const itemTypes = props.pokemonProp.types.map((onepokemon,index)=>{return(
        <li key={index} className="list">
            {onepokemon}
        </li>)
        
       });
    return(
        <article>

            <h2>{props.pokemonProp.name}</h2>
            <h4>Tipos</h4>
            <ul>
                {itemTypes}
           </ul>
        </article>
    )

}
export default Pokemon;

    