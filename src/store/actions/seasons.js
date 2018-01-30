export default {
  fetchSeasons
};

export function fetchSeasons () {
  return dispatch => {
    return fetch("http://localhost:3001/seasons")
      .then(response => response.json())
      .then(seasons => {
        dispatch({ type: "FETCH_SEASONS_SUCCESS", seasons });
      });
  };
}
