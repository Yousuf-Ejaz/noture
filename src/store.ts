import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { boardListReducer } from "./reducers/boardListReducers";
import { Board } from "./types/board";

type initialStateType = {
	boardList: Board[];
};

const reducer = combineReducers({ boardList: boardListReducer });


const initialState: Partial<{ boardList: never }> = {};
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
