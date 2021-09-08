import React from 'react'
import pokeCardCss from './PokeCard.css'


const PokeCard = (props)=>{
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return(
    <div className='poke-card'>
        <h3 className='poke-card-title'>{props.title}</h3>
        <img className='poke-card-img'src={url}/>
        <p className='poke-card-type'>Type:{props.type}</p>
        <p>{props.exp} EXP</p>

    </div>
    )

}
export default PokeCard