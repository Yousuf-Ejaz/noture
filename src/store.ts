import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { boardListReducer } from "./reducers/boardListReducers";

const reducer = combineReducers({ boardList: boardListReducer });

const initialState = {};
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
export type RootState = ReturnType<typeof store.getState>;
export default store;
