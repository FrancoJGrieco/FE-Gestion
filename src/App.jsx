import { Outlet } from "react-router-dom";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import { AuthProvider } from "./hooks/auth";
import { ProductosProvider } from "./hooks/productos";

function App() {
	return (
		<AuthProvider>
			<ProductosProvider>
				<PermanentDrawerLeft>
					<Outlet />
				</PermanentDrawerLeft>
			</ProductosProvider>
		</AuthProvider>
	);
}

export default App;
