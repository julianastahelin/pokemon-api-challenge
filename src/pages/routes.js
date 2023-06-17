import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "./pokemon-list";
import { Pokemon } from "./pokemon"
import TopHeader from '../components/header'
import Footer from '../components/footer'
import { PokemonByName } from "./search-by-name";
import SearchSection from '../components/search-section'

function AppRoutes() {
    return (
        <BrowserRouter>
            <TopHeader />
            <SearchSection />
            <Routes>
                <Route exact path="/" element={<Pokemons />} />
                <Route exact path="/pokemon/:name" element={<Pokemon />} />
                <Route exact path="/pokemon/search/:name" element={<PokemonByName />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes