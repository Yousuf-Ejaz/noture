import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import BoardsPage from "./pages/BoardsPage";
function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/boards/:id" element={<BoardsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
