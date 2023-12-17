import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
type BoardItemProps = {
	id: String;
	title: String;
	deleteBoard: (id: String) => void;
};

function BoardItem(props: BoardItemProps) {
	const { id, title, deleteBoard } = props;
	const clickHandler = () => {
		deleteBoard(id);
	};
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
			</CardHeader>
			<CardFooter className="flex justify-between">
				<Button onClick={clickHandler}>Delete</Button>
			</CardFooter>
		</Card>
	);
}
export default BoardItem;
