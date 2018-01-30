export default {
  fetchEpisodes
};

export function fetchEpisodes () {
  return dispatch => {
    return fetch("http://localhost:3001/episodes")
      .then(response => response.json())
      .then(episodes => {
        dispatch({ type: "FETCH_EPISODES_SUCCESS", episodes });
      });
  };
}
