import { Board } from "@/types/board";
import { Action } from "@/actions/boardListActions";

export const boardListReducer = (state: Board[] = [], action: Action) => {
	switch (action.type) {
		case "ADD_BOARD": {
			const { newBoard } = action.payload;
			return [...state, newBoard];
		}
		case "DELETE_BOARD": {
			const { id } = action.payload;
			const newBoardList = state.filter((board) => board.id !== id);
			return [...newBoardList];
		}
		default:
			return [];
	}
};
