"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonTable from "./components/PokemonTable";
import { POKEMONS } from "./data/pokemondata";

function FilterablePokemonTable({ pokemons }) {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <h1 className="text-center text-2xl font-bold ">Pokemon</h1>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <PokemonTable pokemons={pokemons} filterText={filterText} />
    </div>
  );
}

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="w-1/3">
        <FilterablePokemonTable pokemons={POKEMONS} />
      </div>
      {/* Adjust the width using the w-* classes */}
    </div>
  );
}
