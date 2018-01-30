import { createStore, combineReducers } from "redux";
import { seasons } from "store/reducers/seasons";
import { episodes } from "store/reducers/episodes";
import { characters } from "store/reducers/characters";
import { search } from "store/reducers/search";

const reducers = combineReducers({
  seasons,
  episodes,
  characters,
  search
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);

