import { combineReducers } from "redux";
import { dataReducer } from "./data";
const allReducers = combineReducers({dataReducer});

export default allReducers