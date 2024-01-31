import React from "react";
import { PokemonRow } from "./ProductRow";

export default function PokemonTable({ pokemons, filterText }) {
  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(filterText.toLowerCase()) ||
      pokemon.type.some((type) =>
        type.toLowerCase().includes(filterText.toLowerCase())
      )
  );
  const rows = filteredPokemons.map((pokemon) => (
    <PokemonRow pokemon={pokemon} key={pokemon.id} />
  ));

  return (
    <table className="mx-auto my-4 text-center w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Type</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

