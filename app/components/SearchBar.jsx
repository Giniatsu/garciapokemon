import React from "react";

export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div className="text-center mt-4 w-full border p-4">
      <form>
        <input
          type="text"
          value={filterText}
          placeholder="Search pokemon by name or type"
          onChange={(e) => onFilterTextChange(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        />
      </form>
    </div>
  );
}
