import { Outlet } from "react-router-dom";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";

function App() {
	return (
		<PermanentDrawerLeft>
			<Outlet />
		</PermanentDrawerLeft>
	);
}

export default App;
