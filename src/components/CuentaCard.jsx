import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import removeDatum from "../services/removeDatum";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function CuentaCard({ cuenta }) {
	const type = 'cuentas'
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
				to={`/cuentas/update/${cuenta.id}`}
				state={{ id: cuenta.id }}
				sx={{ textDecoration: 'none' }}
			>
				<Typography variant="h6">{cuenta.user_e}</Typography>
			</Box>
			<IconButton onClick={()=>removeDatum({id: cuenta.id, type})}><RemoveCircleIcon/></IconButton>
		</Box>
	);
}
