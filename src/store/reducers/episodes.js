const initialState = [];

export const episodes = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EPISODES_SUCCESS":
      return [
        ...action.episodes
      ];

    default:
      return state;
  }
};
