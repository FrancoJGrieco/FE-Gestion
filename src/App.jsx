import { Outlet } from "react-router-dom";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import { AuthProvider } from "./hooks/auth";

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
