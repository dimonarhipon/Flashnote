import {combineReducers, createStore} from "redux";
import flashnoteReducer from "./flashnote-reducer";

let reducers = combineReducers ({
	flashnotePage: flashnoteReducer
});

let store = createStore(reducers);

export default store;