import React from 'react';
import 'assets/sass/Search.scss';

function Search({ query, setQuery }) {
  return (
    <div className="search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control"
        placeholder="Search for images"
      />
    </div>
  );
}

export default Search;
