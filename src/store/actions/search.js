export default {
  search
};


export function search (query) {
  return dispatch => {
    dispatch({ type: "FETCH_SEARCH_REQUEST" });

    fetch(`http://localhost:3001/episodes?q=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(searchResults => {
        dispatch({ type: "FETCH_SEARCH_SUCCESS", searchResults });
      });
  };
}
