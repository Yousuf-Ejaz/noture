import BoardForms from "@/components/BoardForms";
import BoardItem from "@/components/BoardItem";
import AddIcon from "@/components/icons/AddIcon";
import EllipsisIcon from "@/components/icons/EllipsisIcon";
import { Board } from "@/types/board";
import { useState } from "react";
import { Link } from "react-router-dom";

type State = {
	boards: Board[];
};
function HomePage() {
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
		<div className="h-screen max-w-2xl mx-auto  p-6 flex flex-col justify-start gap-3">
			<div className="flex justify-between">
				<h2 className="text-xl font-bold">Boards</h2>
				<div className="flex gap-1">
					<div className=" p-2 text-gray-600 cursor-pointer border  flex flex-col justify-center ">
						<AddIcon customClass="w-4 h-4" />
					</div>
					<div className="p-2 text-gray-600 cursor-pointer border  flex flex-col justify-center  ">
						<EllipsisIcon customClass="w-4 h-4 " />
					</div>
				</div>
			</div>
			<BoardForms addBoard={addBoard} />
			{state.boards.map((board) => (
				<Link to={`/boards/${board.id}`} key={board.id}>
					<BoardItem
						id={board.id}
						title={board.title}
						key={board.id}
						deleteBoard={deleteBoard}
					/>
				</Link>
			))}
		</div>
	);
}
export default HomePage;
