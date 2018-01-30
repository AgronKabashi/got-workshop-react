const initialState = {};

export const characters = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS_SUCCESS":
      return [
        ...action.characters
      ];

    default:
      return state;
  }
};
