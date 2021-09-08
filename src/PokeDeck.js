import React from 'react'
import PokeCard from './PokeCard'
import PokeDeckCss from './PokeDeck.css'

let defult = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
/**
 * 
 *takes an array of pokemon objects [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},...
]
and returns a pokedex 
 */
const PokeDeck =({pokemon=defult})=>{
    return(
        <div className="poke-deck">
            <h1 className="poke-deck-title">Pokedex</h1>
            <div className="poke-deck-container">
                {pokemon.map((p)=><PokeCard id ={p.id}key={p.id}title={p.name} exp={p. base_experience} type={p.type}/>)}
            </div>

        </div>
    )
}

export default PokeDeck