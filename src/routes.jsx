import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import UpdateProductos from "./pages/UpdateProductos";
import CreateProductos from "./pages/CreateProductos";
import Turnos from "./pages/Turnos";
import Empleados from "./pages/Empleados";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/RequireAuth";
import Ventas from "./pages/Ventas";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "home", element: <RequireAuth><Home /></RequireAuth> },
			{ path: "productos", element: <RequireAuth><Productos /></RequireAuth> },
			{ path: "productos/update/:id", element: <RequireAuth><UpdateProductos /></RequireAuth> },
			{ path: "productos/create", element: <RequireAuth><CreateProductos /></RequireAuth> },
			{ path: "turnos", element: <RequireAuth><Turnos /></RequireAuth> },
			{ path: "empleados", element: <RequireAuth><Empleados /></RequireAuth> },
			{ path: "ventas", element: <RequireAuth><Ventas /></RequireAuth> },
			{ path: "login", element: <Login /> },
			{ path: "dashboard", element: <RequireAuth><Dashboard /></RequireAuth> },
		],
	},
]);
