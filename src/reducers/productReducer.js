const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        productPosts: action.payload
      };
    case "SET_POST":
      return {
        ...state,
        resentProducts: action.payload
      };
    case "SENDING_REQUEST":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "REQUEST_FINISHED":
      return {
        ...state,
        loading: false,
        error: false
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default productReducer;
