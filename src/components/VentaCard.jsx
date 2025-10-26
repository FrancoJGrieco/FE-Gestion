import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import removeDatum from "../services/removeDatum";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function VentaCard({ venta }) {
	const type = 'ventas'
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
				to={`/ventas/info/${venta.id}`}
				state={{ venta: venta }}
				sx={{ textDecoration: 'none' }}
			>
				<Typography variant="h6">{venta.numero_ticket} - {venta.total}</Typography>
			</Box>
			<IconButton onClick={()=>removeDatum({id: venta.id, type})}><RemoveCircleIcon/></IconButton>
		</Box>
	);
}
