import { Board } from "@/types/board";

export const boardListReducer = (
	state: Board[] = [],
	action: { type: string; payload: { newBoard: Board; id: string } }
): Board[] => {
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
