import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import removeDatum from "../services/removeDatum";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function EmpleadoCard({ empleado }) {
	const type = 'empleados'
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
				to={`/empleados/update/${empleado.id}`}
				state={{ empleado: empleado }}
				sx={{ textDecoration: 'none' }}
			>
				<Typography variant="h6">{empleado.fname} - {empleado.cuit}</Typography>
			</Box>
			<IconButton onClick={()=>removeDatum({id: empleado.id, type})}><RemoveCircleIcon/></IconButton>
		</Box>
	);
}
