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
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerImage from "./DrawerImage";

export default function PermanentDrawerLeft({ children }) {
	const drawerWidth = 240;
	const optionList = [
		{
			name: 'Inicio',
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
	]
	// const optionList = [
	// 	"Panel de control",
	// 	"Reportes",
	// 	"Mas herramientas",
	// 	"Dashboard",
	// ];

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ width: 100%{/*`calc(100% - ${drawerWidth}px)`*/}, ml: `${drawerWidth}px`, zIndex:10000}}
			>
				<Toolbar sx={{ width: `${drawerWidth}px`}}>
					<Typography variant="h6" noWrap component={Link} to="/home" sx={{ margin: 'auto', textDecorationLine:'none'}}>
						<img src="./Logo.png" alt="logo_tuStore" style={{width: 100}}/>
					</Typography>
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
				<List>
					{optionList.map((objeto) => (
						<ListItem key={objeto.link} disablePadding>
								<ListItemButton component={Link} 	to={`/${objeto.link}`}>
									<ListItemIcon>
										<DrawerImage name={objeto.name} />
									</ListItemIcon>
									<ListItemText primary={objeto.name} />
								</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
