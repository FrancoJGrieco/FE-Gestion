import { Box } from "@mui/material";
import ProductoCard from "../components/ProductoCard";
import useGetProductos from "../hooks/useGetProductos";
import { Link } from "react-router-dom";

export default function Productos() {
	const { productos } = useGetProductos();

	return (
		<div>
			<h1>Productos</h1>
			<Link to='/productos/create'>Create</Link>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{productos?.map((producto) => (
					<div key={producto.id}>
						<ProductoCard producto={producto} />
					</div>
				))}
			</Box>
		</div>
	);
}
