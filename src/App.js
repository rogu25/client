import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";

import Inicio from "./pages/Inicio";
import Home from './pages/Home';
import DetallePokemon from "./pages/DetallePokemon";
import FormPokemon from "./pages/FormPokemon";


function App() {
  return (
    <React.Fragment>
      <div className="contenedor_home">
      <Routes>
        <Route exact path='/inicio' element={<Inicio />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/detalle/:idPokemon' element={<DetallePokemon />} />
        <Route exact path='/formulario' element={ <FormPokemon/> } />
      </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
