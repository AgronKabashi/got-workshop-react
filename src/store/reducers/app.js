const initialState = {
  isLoading: false
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_DATA":
      return {
        isLoading: true
      };

    case "DATA_LOADED":
      return {
        isLoading: false
      };

    default:
      return state;
  }
};
