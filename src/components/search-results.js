import React from "react";
import PropTypes from "prop-types";

export const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map(result => <li>{result.name}</li>)}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array
};
