import { createStore } from "redux";
import reducers from "./reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, enhancer())
export default store;