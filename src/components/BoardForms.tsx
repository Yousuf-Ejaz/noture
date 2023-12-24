import { useRef } from "react";

type BoardFormProps = {
	addBoard: (name: string) => void;
};

function BoardForms(props: BoardFormProps) {
	const inputElement = useRef<HTMLInputElement>(null);
	const { addBoard } = props;

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputElement.current) {
			addBoard(inputElement.current.value);
			inputElement.current.value = "";
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				name="title"
				className="w-full h-12 px-4 border bg-gray-200  focus:outline-none  focus:ring-none focus:border-none "
				placeholder="add a new board..."
				ref={inputElement}
				maxLength={24}
			/>
		</form>
	);
}
export default BoardForms;
