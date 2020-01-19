import { combineReducers, createStore } from "redux";
import flashnoteReducer from "./flashnote-reducer";

let reducers = combineReducers({
  flashnoteReducer: flashnoteReducer
});

let store = createStore(reducers);

export default store;
