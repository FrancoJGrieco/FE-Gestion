import { Box, Container, TextField, Typography } from "@mui/material";
import ProductoCard from "../components/ProductoCard";
import useGetProductos from "../hooks/useGetProductos";
import { Link } from "react-router-dom";

export default function Productos() {
	const { productos } = useGetProductos();

	return (
		<Container
			sx={{
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "column",
				gap: 2
			}}
		>
			<Typography component={'h4'} variant="h4">Productos</Typography>
			<TextField name='product-filter' label='Producto'></TextField>
			<Link to='/productos/create'>Create</Link>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{productos?.map((producto) => (
					<ProductoCard key={producto.id} producto={producto} />
				))}
			</Box>
		</Container>
	);
}
