import { RootState } from "@/store";
import { Board } from "@/types/board";
import { ThunkAction } from "redux-thunk";
export type Action = { type: string; payload: { newBoard: Board; id: string } };

export const addBoard = (
	title: string
): ThunkAction<void, RootState, undefined, Action> => {
	const newBoard: Board = {
		id: crypto.randomUUID(),
		title: title,
		taskList: [],
	};
	return (dispatch, getState) => {
		localStorage.setItem("boardList", JSON.stringify(getState().boardList));
		return dispatch({ type: "ADD_BOARD", payload: { newBoard, id: "" } });
	};
};
export const deleteBoard = (
	id: string
): ThunkAction<void, RootState, undefined, Action> => {
	const mockBoard: Board = {
		id: "",
		title: "",
		taskList: [],
	};
	return (dispatch, getState) => {
		localStorage.setItem("boardList", JSON.stringify(getState().boardList));
		return dispatch({
			type: "DELETE_BOARD",
			payload: { newBoard: mockBoard, id },
		});
	};
};
