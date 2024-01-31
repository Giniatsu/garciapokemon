export function PokemonRow({ pokemon }) {
  return (
    <tr>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td>{pokemon.type.join(",")}</td>
    </tr>
  );
}
