import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import UpdateProductos from "./pages/UpdateProductos";
import CreateProductos from "./pages/CreateProductos";
import Turnos from "./pages/Turnos";
import Empleados from "./pages/Empleados";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "productos", element: <Productos /> },
			{ path: "productos/update/:id", element: <UpdateProductos /> },
			{ path: "productos/create", element: <CreateProductos /> },
			{ path: "turnos", element: <Turnos /> },
			{ path: "empleados", element: <Empleados /> },
		],
	},
]);
