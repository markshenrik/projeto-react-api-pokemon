import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokemons from '../pokemons/Pokemons.js'
import PokemonDetails from '../pokemon-details/PokemonDetails.js'


const AppRoutes = () => {
  
    return (
        <BrowserRouter>
            <Routes >
                <Route  exact path='/' element={<Pokemons />}/>
                <Route  exact path='/pokemon/:id' element={<PokemonDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes