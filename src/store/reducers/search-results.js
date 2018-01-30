const initialState = [];

export const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_REQUEST": // A new search is underway, clear the previous results
      return [];

    case "FETCH_SEARCH_SUCCESS":
      return [
        ...action.searchResults
      ];

    default:
      return state;
  }
};
