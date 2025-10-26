import { Box, IconButton, Popover, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import removeDatum from "../services/removeDatum";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { styles } from '../assets/css/styles'
import * as React from 'react';

export default function ProductoCard({ producto }) {
	const type = 'productos'

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

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
				<div>
					<Typography
						sx={styles.bxCardTitle}
						aria-owns={open ? 'mouse-over-popover' : undefined}
						aria-haspopup="true"
						onMouseEnter={handlePopoverOpen}
						onMouseLeave={handlePopoverClose}
					>
						{producto.name.substring(0, 13)}
						{producto.name[13] !== ' ' ? producto.name[13] : ''}
						{(producto.name.length > 14) ? '...' : false}
					</Typography>
					<Popover
						disableAutoFocus
						disableEnforceFocus
						id="mouse-over-popover"
						sx={{ pointerEvents: 'none' }}
						open={open}
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						onClose={handlePopoverClose}
						disableRestoreFocus
					>
						<Typography sx={{ p: 1 }}>{producto.name}</Typography>
					</Popover>
				</div>
			</Box>
			<Box
				sx={styles.bxCardDes}
			>
				<Box
					sx={styles.bxCardInfo}
				>
					<Typography sx={styles.bxCardText}>
						Codigo: {producto.codigo}
					</Typography>
					<Typography sx={styles.bxCardText}>
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
