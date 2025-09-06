import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
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
import * as React from "react";
import { Link } from "react-router-dom";
import DrawerImage from "./DrawerImage";

export default function PermanentDrawerLeft({ children }) {
	const drawerWidth = 240;
	const optionList = [
		{
			name: 'Inicio',
			link: ''
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
		}
	]
	// const optionList = [
	// 	"Panel de control",
	// 	"Reportes",
	// 	"Transacciones",
	// 	"Productos",
	// 	"Clientes",
	// 	"Empleados",
	// 	"Turnos",
	// 	"Mas herramientas",
	// 	"Configuracion",
	// 	"Login",
	// 	"Dashboard",
	// ];

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Tu Store
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
									<ListItemText primary={objeto.name} sx={{

									}} />
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
