export default {
  fetchCharacters
};

export function fetchCharacters () {
  return dispatch => {
    return fetch("http://localhost:3001/characters")
      .then(response => response.json())
      .then(characters => {
        dispatch({ type: "FETCH_CHARACTERS_SUCCESS", characters });
      });
  };
}
