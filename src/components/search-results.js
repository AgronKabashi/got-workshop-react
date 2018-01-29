import React from "react";
import PropTypes from "prop-types";

export const SearchResults = ({ results }) => {
  return (
    <ul>
      {results.map(result => <li>{result.name}</li>)}
    </ul>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array
};
