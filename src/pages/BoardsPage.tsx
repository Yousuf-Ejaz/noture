import TaskListBoard from "@/components/TaskListBoard";
import AddIcon from "@/components/icons/AddIcon";
import EllipsisIcon from "@/components/icons/EllipsisIcon";
import { Board, StateType } from "@/types/board";
import { Key, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

type taskType = {
	id: string;
	content: string;
};

type taskListType = {
	id: Key | null | undefined;
	title: string;
	tasks: taskType[];
};

function BoardsPage() {
	const boardList = useSelector((state: StateType) => state.boardList);
	const { id } = useParams();
	const board: Board = boardList.find((board) => board.id === id)!;
	const [boardState, setBoardState] = useState<taskListType[]>([]);
	const TaskListInput = useRef<HTMLInputElement>(null);
	const addTaskListHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (TaskListInput.current) {
			const newTaskList = {
				id: crypto.randomUUID(),
				title: TaskListInput.current.value,
				tasks: [],
			};
			setBoardState([...boardState, newTaskList]);
			TaskListInput.current.value = "";
		}
	};
	return (
		<div className="w-full h-full px-3 py-4 flex flex-col gap-3">
			<div className="flex justify-between">
				<div className="text-xl font-bold">{board.title}</div>
				<div className="border p-2 cursor-pointer">
					<EllipsisIcon customClass="w-4 h-4" />
				</div>
			</div>
			<div className="flex gap-2 ">
				{boardState.map((board) => (
					<TaskListBoard
						id={board.id}
						title={board.title}
						key={board.id}
					/>
				))}
				<div className="flex gap-0 h-fit">
					<div className="border p-2 cursor-pointer">
						<AddIcon customClass="w-4 h-4" />
					</div>
					<form onSubmit={addTaskListHandler}>
						<input
							type="text"
							className="border p-1"
							ref={TaskListInput}
							placeholder="Enter Title List..."
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
export default BoardsPage;
