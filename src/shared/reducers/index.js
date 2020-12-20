import { combineReducers } from "redux";
import { HomeReducer } from "../../modules/home/home.reducer";
import { MenuReducer } from "../../modules/menu/menu.reducer";

const reducers = {
  HomeReducer,
  MenuReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
