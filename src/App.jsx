import { Outlet } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";

function App() {
	return (
		<AuthProvider>
			<PermanentDrawerLeft>
				<Outlet />
			</PermanentDrawerLeft>
		</AuthProvider>
	);
}

export default App;
