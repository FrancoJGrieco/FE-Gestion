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

export default function PermanentDrawerLeft({ children }) {
	const drawerWidth = 240;
	const optionList = [
		"Panel de control",
		"Reportes",
		"Transacciones",
		"Productos",
		"Clientes",
		"Empleados",
		"Turnos",
		"Mas herramientas",
		"Configuracion",
		"Login",
		"Dashboard",
	];
	
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar>
						<Link to='/'>Tu Store</Link>
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
					{optionList.map((text, index) => (
						<ListItem key={text} disablePadding>
							<Link to={`/${text}`}>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</Link>
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
