import React from 'react'
import PokeDeck from './PokeDeck'


const App = (props) => {
    console.log('app running')
    return(
        <React.Fragment>
            <PokeDeck/>
        </React.Fragment>
    )
}

export default App