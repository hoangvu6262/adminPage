import { combineReducers } from "redux";
import commonReducer from "./commom.ruducer";
import sidebarShowReducer from "./sidebarShow.reducer";
import userPaginationReducer from "./user.reducer";

const rootReducer = combineReducers({
  commom: commonReducer,
  sidebar: sidebarShowReducer,
  userPagination: userPaginationReducer,
});

export default rootReducer;
