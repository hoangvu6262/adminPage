const initialState = {
  userList: [],
  groupId: "GP01",
  isAdminLogin: false,
  isShowAlert: false,
};

const userPaginationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_USER_PAGINATION_SUCCESS":
      const newState = { ...state };
      newState.userList = payload;
      return newState;
    case "GET_USER_PAGINATION_FAIL":
      console.log(payload);
      return state;
    case "ADD_USER_SUCCESS":
      const newState1 = { ...state };
      newState1.userList.items.push(payload);
      return newState1;
    case "ADD_USER_FAIL":
      console.log(payload);
      return state;
    case "LOGIN_SUCCESS":
      if (payload.maLoaiNguoiDung === "QuanTri") {
        return {
          ...state,
          isAdminLogin: true,
        };
      } else {
        return {
          ...state,
          isShowAlert: true,
        };
      }
    case "LOGIN_FAILED":
      return {
        ...state,
        isShowAlert: true,
      };
    default:
      return state;
  }
};

export default userPaginationReducer;
