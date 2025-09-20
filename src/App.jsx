import { Outlet } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";

function App() {
	return (
		<AuthProvider>
			<Outlet />
		</AuthProvider>
	);
}

export default App;
