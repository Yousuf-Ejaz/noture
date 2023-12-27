import BoardForms from "@/components/BoardForms";
import BoardItem from "@/components/BoardItem";
import AddIcon from "@/components/icons/AddIcon";
import EllipsisIcon from "@/components/icons/EllipsisIcon";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StateType } from "@/types/board";
import { addBoard, deleteBoard } from "@/actions/boardListActions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
type AppDispatch = ThunkDispatch<StateType, undefined, Action>;
function HomePage() {
	const taskList = useSelector((state: StateType) => state.boardList);
	const dispatch: AppDispatch = useDispatch();
	const addNewBoard = (title: string) => {
		dispatch(addBoard(title));
	};

	const deleteBoardById = (
		id: string,
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		dispatch(deleteBoard(id));
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
			<BoardForms addBoard={addNewBoard} />
			{taskList.map((board) => (
				<Link to={`/boards/${board.id}`} key={board.id}>
					<BoardItem
						id={board.id}
						title={board.title}
						key={board.id}
						deleteBoard={deleteBoardById}
					/>
				</Link>
			))}
		</div>
	);
}
export default HomePage;
