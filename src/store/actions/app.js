import { fetchCharacters } from "./characters";
import { fetchEpisodes } from "./episodes";
import { fetchSeasons } from "./seasons";

export default {
  fetchEverything
};

function fetchEverything () {
  return dispatch => {
    dispatch({ type: "LOADING_DATA" });

    return Promise.all([
      dispatch(fetchSeasons()),
      dispatch(fetchEpisodes()),
      dispatch(fetchCharacters())
    ])
    .then(() => {
      dispatch({ type: "DATA_LOADED" });
    });

  };
}
