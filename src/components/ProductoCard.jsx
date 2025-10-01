import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import removeDatum from "../services/removeDatum";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { styles } from '../assets/css/styles'

export default function ProductoCard({ producto }) {
	const type = 'productos'
	return (
		<Box
			sx={styles.bxCard}
		>
			<Box
				component={Link}
				to={`/productos/update/${producto.id}`}
				state={{ id: producto.id }}
				sx={styles.bxCardElement}
			>
				<Typography>{producto.name}</Typography>
			</Box>
			<Box
				sx={styles.bxCardDes}
			>
				<Box
					sx={styles.bxCardInfo}
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
