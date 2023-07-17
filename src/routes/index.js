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

    const [ visible, setVisible ] = useState(false);
    function toggleBtnVisibility() {
        const distanceToTop = document.documentElement.scrollTop;
        distanceToTop > 100 ? setVisible(true) : setVisible(false);
    }
    window.addEventListener('scroll', toggleBtnVisibility);

    const [ reset, toggleReset ] = useState(true);

    function resetType() {
        reset === true ? toggleReset(false) : toggleReset(true);
    }
    function scrollTop() { 
        resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <BrowserRouter>
            <Header scrollTop={scrollTop} resetType={resetType} />
            <SearchSection ref={resultRef} reset={reset} />
            <Routes>
                <Route exact path="/" element={<Pokemons />} />
                <Route exact path="/type/:type" element={<Pokemons />} />
                <Route exact path="/pokemon/:name" element={<Pokemon scrollTop={scrollTop} />} />
                <Route exact path="/pokemon/search/:name" element={<PokemonByName scrollTop={scrollTop} />} />
            </Routes>
            <BackToTopBtn scrollTop={scrollTop} visible={visible} />
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes