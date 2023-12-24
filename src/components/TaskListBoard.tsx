import { Key, useRef, useState } from "react";

type TaskListBoardPropsType = {
	id: Key | null | undefined;
	title: String;
};

type TaskType = {
	id: Key | null | undefined;
	content: String;
};
function TaskListBoard(props: TaskListBoardPropsType) {
	const { title } = props;
	const addTaskRef = useRef<HTMLInputElement>(null);
	const [taskListState, setTaskListState] = useState<TaskType[]>([]);

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (addTaskRef.current) {
			const newTask = {
				id: crypto.randomUUID(),
				content: addTaskRef.current.value,
			};
			setTaskListState([...taskListState, newTask]);
			addTaskRef.current.value = "";
		}
	};
	return (
		<div className="bg-gray-200 p-4 min-w-[16rem] shadow flex flex-col gap-2">
			<div>{title}</div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="+ Add a card..."
					className="px-2 py-2 w-full"
					ref={addTaskRef}
				/>
			</form>

			{taskListState.map((task) => (
				<div key={task.id} className="p-2 bg-white">
					{task.content}
				</div>
			))}
		</div>
	);
}
export default TaskListBoard;
