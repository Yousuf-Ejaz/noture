export type Task = {
	id: string;
	content: string;
};
export type Board = {
	id: string;
	title: string;
	taskList: Task[];
};

export type StateType = {
	boardList: Board[];
};
