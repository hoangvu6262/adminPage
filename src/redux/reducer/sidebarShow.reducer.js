const initialState = {
  sidebarShow: true,
};

const sidebarShowReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET":
      const newState = { ...state };
      newState.sidebarShow = !state.sidebarShow;
      return newState;
    default:
      return state;
  }
};

export default sidebarShowReducer;
