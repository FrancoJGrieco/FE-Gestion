import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import removeDatum from "../services/removeDatum";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function RolCard({ rol }) {
	const type = 'roles'
	return (
		<Box
		sx={{
			backgroundColor: "darkgray",
			padding: 1,
			borderRadius: 5,
			display: 'flex',
		}}
		>
			<Box
				component={Link}
				to={`/roles/update/${rol.id}`}
				state={{ rol: rol }}
				sx={{ textDecoration: 'none' }}
			>
				<Typography variant="h6">{rol.id} - {rol.nombre}</Typography>
			</Box>
			<IconButton onClick={()=>removeDatum({id: rol.id, type})}><RemoveCircleIcon/></IconButton>
		</Box>
	);
}
