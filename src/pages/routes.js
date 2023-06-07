import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "./pokemon-list";
import { Pokemon } from "./pokemon"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Pokemons />} />
                <Route exact path="/pokemon/:name" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes