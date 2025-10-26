import { createBrowserRouter } from "react-router-dom";
import { ResourceProvider } from "./components/resourceProvider";
import App from "./App";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Turnos from "./pages/Turnos";
import Empleados from "./pages/Empleados";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/RequireAuth";
import Ventas from "./pages/Ventas";
import CreateVentas from "./pages/CreateVentas";
import InfoVenta from "./pages/InfoVenta";
import Roles from "./pages/Roles";
import Cuentas from "./pages/Cuentas";
import FormProductos from "./pages/FormProductos";
import FormEmpleados from "./pages/FormEmpleados";
import FormCuentas from "./pages/FormCuentas";
import Configuracion from "./pages/Configuracion";
import { VentasGraficoProvider } from "./hooks/ventasGrafico";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "", element:
					<RequireAuth>
						<VentasGraficoProvider>
							<ResourceProvider>
								<Home />
							</ResourceProvider>
						</VentasGraficoProvider>
					</RequireAuth>
			},
			{
				path: "*", element:
					<RequireAuth>
						<VentasGraficoProvider>
							<ResourceProvider>
								<Home />
							</ResourceProvider>
						</VentasGraficoProvider>
					</RequireAuth>
			},
			{
				path: "home", element:
					<RequireAuth>
						<VentasGraficoProvider>
							<ResourceProvider>
								<Home />
							</ResourceProvider>
						</VentasGraficoProvider>
					</RequireAuth>
			},
			{
				path: "productos", element:
					<RequireAuth>
						<ResourceProvider>
							<Productos />
						</ResourceProvider>
					</RequireAuth>
			},
			{
				path: "productos/create", element:
					<RequireAuth>
						<FormProductos />
					</RequireAuth>
			},
			{
				path: "productos/update/:id", element:
					<RequireAuth>
						<FormProductos />
					</RequireAuth>
			},
			{
				path: "turnos", element:
					<RequireAuth>
						<ResourceProvider>
							<Turnos />
						</ResourceProvider>
					</RequireAuth>
			},
			{
				path: "empleados", element:
					<RequireAuth>
						<ResourceProvider>
							<Empleados />
						</ResourceProvider>
					</RequireAuth>
			},
			{
				path: "empleados/create", element:
					<RequireAuth>
						<FormEmpleados />
					</RequireAuth>
			},
			{
				path: "empleados/update/:id", element:
					<RequireAuth>
						<FormEmpleados />
					</RequireAuth>
			},
			{
				path: "cuentas", element:
					<RequireAuth>
						<ResourceProvider>
							<Cuentas />
						</ResourceProvider>
					</RequireAuth>
			},
			{
				path: "cuentas/create", element:
					<RequireAuth>
						<FormCuentas />
					</RequireAuth>
			},
			{
				path: "cuentas/update/:id", element:
					<RequireAuth>
						<FormCuentas />
					</RequireAuth>
			},
			{
				path: "ventas", element:
					<RequireAuth>
						<ResourceProvider>
							<Ventas />
						</ResourceProvider>
					</RequireAuth>
			},
			{
				path: "ventas/create", element:
					<RequireAuth>
						<CreateVentas />
					</RequireAuth>
			},
			{
				path: "ventas/info/:id", element:
					<RequireAuth>
						<InfoVenta />
					</RequireAuth>
			},
			{
				path: "dashboard", element:
					<RequireAuth>
						<Dashboard />
					</RequireAuth>
			},
			{
				path: "roles", element:
					<RequireAuth>
						<ResourceProvider>
							<Roles />
						</ResourceProvider>
					</RequireAuth>
			},
			{
				path: "configuracion", element:
					<RequireAuth>
						<Configuracion />
					</RequireAuth>
			},
			{ path: "login", element: <Login /> },
		],
	},
]);
