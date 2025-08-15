import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import removeDatum from "../services/removeDatum";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function ProductoCard({ producto }) {
	const type = 'productos'
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
				to={`/productos/update/${producto.id}`}
				state={{ producto: producto }}
				sx={{ textDecoration: 'none' }}
			>
				<Typography variant="h6">{producto.id}.{producto.name}</Typography>
			</Box>
			<IconButton onClick={()=>removeDatum({id: producto.id, type})}><RemoveCircleIcon/></IconButton>
		</Box>
	);
}
