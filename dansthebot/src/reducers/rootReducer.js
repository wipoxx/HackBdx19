import { combineReducers } from "redux";
import playersInfo from "./playersReducer";

const rootReducer = combineReducers({
	playersInfo,
});

export default rootReducer;
