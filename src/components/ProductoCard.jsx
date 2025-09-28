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
				borderRadius: 0.5,
				display: 'flex',
				flexDirection: 'column',
				gap: 1
			}}
		>
			<Box
				component={Link}
				to={`/productos/update/${producto.id}`}
				state={{ id: producto.id }}
				sx={{
					textDecoration: 'none',
					backgroundColor: 'gray',
					borderTopLeftRadius: 2,
					borderTopRightRadius: 2,
					height: '2rem',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography>{producto.name}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: 1,
					marginBottom: 1
				}}
			>
				<Box
					sx={{
						marginLeft: 1
					}}
				>
					<Typography>
						Codigo: {producto.codigo}
					</Typography>
					<Typography>
						Cantidad: {producto.cant}
					</Typography>
				</Box>
				<Box>
					<IconButton onClick={() => removeDatum({ id: producto.id, type })}><RemoveCircleIcon /></IconButton>
				</Box>
			</Box>
		</Box >
	);
}
