import { Board } from "@/types/board";

export const addBoard =
	(title: string) =>
	(
		dispatch: (action: {
			type: string;
			payload: { newBoard: Board; id: string };
		}) => void,
		getState: () => { boardList: Board[] }
	) => {
		const newBoard: Board = {
			id: crypto.randomUUID(),
			title: title,
			taskList: [],
		};
		dispatch({ type: "ADD_BOARD", payload: { newBoard, id: "" } });
		localStorage.setItem("boardList", JSON.stringify(getState().boardList));
	};

export const deleteBoard =
	(id: string) =>
	async (
		dispatch: (action: {
			type: string;
			payload: { newBoard: Board; id: string };
		}) => void,
		getState: () => { boardList: Board[] }
	) => {
		const mockBoard: Board = {
			id: "",
			title: "",
			taskList: [],
		};
		dispatch({
			type: "DELETE_BOARD",
			payload: { newBoard: mockBoard, id },
		});
		localStorage.setItem("boardList", JSON.stringify(getState().boardList));
	};
