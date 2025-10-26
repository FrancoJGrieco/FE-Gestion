import {
	AppBar,
	Box,
	CssBaseline,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerImage from "./DrawerImage";
import { useContext } from "react";
import { AuthContext } from "../hooks/auth";

export default function PermanentDrawerLeft({ children }) {
	const { loggedIn, logout } = useContext(AuthContext)
	const drawerWidth = 240;
	const optionList = [
		{
			name: 'Dashboard',
			link: 'home'
		},
		{
			name: 'Ventas',
			link: 'ventas'
		},
		{
			name: 'Empleados',
			link: 'empleados'
		},
		{
			name: 'Productos',
			link: 'productos'
		},
		{
			name: 'Roles',
			link: 'roles'
		},
		{
			name: 'Cuentas',
			link: 'cuentas'
		},
		{
			name: 'Turnos',
			link: 'turnos'
		},
		{
			name: 'Configuracion',
			link: 'configuracion'
		},
		{
			name: 'Cerrar Sesion',
			link: 'cerrarSesion'
		},
	]

	const { user } = useContext(AuthContext)
	// const optionList = [
	// 	"Panel de control",
	// 	"Reportes",
	// 	"Mas herramientas",
	// 	"Dashboard",
	// ];

	if (!loggedIn) return <>{children}</>

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: 100 % {/*`calc(100% - ${drawerWidth}px)`*/ },
					ml: `${drawerWidth}px`,
					zIndex: 10000,
					backgroundColor: '#4a4f52ff'
				}}
			>
				<Toolbar sx={{
					width: `${drawerWidth}px`,
				}}>
					<Box component={Link} to="/home" sx={{ margin: 'auto' }} >
						<img src="/Logo.png" alt="logo_tuStore" style={{ width: 100 }} />
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />
				{/* '#E9F3FB' */}
				<List sx={{ backgroundColor: '#5c6165ff', height: '100vh' }}>
					<ListItem key={optionList[0].link} disablePadding>
						<ListItemButton component={Link} to={`/${optionList[0].link}`}>
							<ListItemIcon>
								<DrawerImage name={optionList[0].name} />
							</ListItemIcon>
							<ListItemText primary={optionList[0].name} style={{ color: 'white' }} />
						</ListItemButton>
					</ListItem>

					{optionList.map((objeto) => {
						const tienePermiso = user.cuenta?.Rol?.Seccions?.some(
							(seccion) => seccion.nombre === objeto.name.toLowerCase()
						);

						if (!tienePermiso) return null;

						return (
							<ListItem key={objeto.link} disablePadding>
								<ListItemButton component={Link} to={`/${objeto.link}`}>
									<ListItemIcon>
										<DrawerImage name={objeto.name} />
									</ListItemIcon>
									<ListItemText primary={objeto.name} style={{ color: 'white' }} />
								</ListItemButton>
							</ListItem>
						);
					})}
					<ListItem key={optionList[optionList.length - 1].link} disablePadding>
						<ListItemButton onClick={logout}>
							<ListItemIcon>
								<DrawerImage name={optionList[optionList.length - 1].name} />
							</ListItemIcon>
							<ListItemText primary={optionList[optionList.length - 1].name} style={{ color: 'white' }} />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			{/* "#E9F3FB" */}
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "#E9F3FB", p: 3, height: '100%', minHeight: '100vh' }}
			>
				<Toolbar />
				{children}
			</Box>
		</Box >
	);
}
