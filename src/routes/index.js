import { useState, useRef } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../components/header';
import Pokemons from "../pages/pokemons";
import Pokemon from "../pages/pokemon";
import PokemonByName from "../pages/pokemon-by-name";
import SearchSection from '../components/search-section';
import BackToTopBtn from "../components/back-to-top-btn";
import Footer from '../components/footer';

function AppRoutes() {

    const resultRef = useRef(null);
    const [ type, setType ] = useState('');

    function resetTypeAction(dataFromHeader) {
        setType(dataFromHeader);
    }
 
    return (
        <BrowserRouter>
            <Header resultReference={resultRef} sendToParent={resetTypeAction} />
            <SearchSection ref={resultRef} resetType={type} />
            <Routes>
                <Route exact path="/" element={<Pokemons />} />
                <Route exact path="/type/:type" element={<Pokemons />} />
                <Route exact path="/pokemon/:name" element={<Pokemon />} />
                <Route exact path="/pokemon/search/:name" element={<PokemonByName />} />
            </Routes>
            <BackToTopBtn resultReference={resultRef} />
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes