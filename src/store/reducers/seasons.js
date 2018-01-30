const initialState = [];

export const seasons = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEASONS_SUCCESS":
      return [
        ...action.seasons
      ];

    default:
      return state;
  }
};
