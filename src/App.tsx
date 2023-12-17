import { useState } from "react";
import BoardForms from "./components/BoardForms";
import { Board } from "./types/board";
import BoardItem from "./components/BoardItem";

type State = {
	boards: Board[];
};

function App() {
	const [state, setState] = useState<State>({ boards: [] });

	const addBoard = (title: string) => {
		console.log("addBoard called with Title: ", title);
		const newBoard = {
			id: crypto.randomUUID(),
			title: title,
		};
		setState({ boards: [...state.boards, newBoard] });
	};

	const deleteBoard = (id: String) => {
		console.log("deleteBoard called with ID: ", id);
		const newBoards = state.boards.filter((board) => board.id !== id);
		setState({ boards: newBoards });
	};
	return (
		<div className="h-screen max-w-2xl mx-auto bg-gray-200 p-6">
			<BoardForms addBoard={addBoard} />
			{state.boards.map((board) => (
				<BoardItem
					id={board.id}
					title={board.title}
					key={board.id}
					deleteBoard={deleteBoard}
				/>
			))}
		</div>
	);
}

export default App;
