import { combineReducers } from "redux";
import { reducerData } from "./reducers";

const reducers = combineReducers({
    data: reducerData,
})
export default reducers;