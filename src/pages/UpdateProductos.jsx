import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import useGetProducto from "../hooks/useInitializeProducto";
import updateProducto from "../services/updateProducto";

export default function UpdateProductos() {
	const location = useLocation();
	const id = location.state.producto.id;
	const { producto } = useGetProducto(id);

	const { form, handleFieldChange } = useForm({ element: producto });

	return (
		<>
			{form && (
				<Container>
					<Box
						sx={{
							maxWidth: "400px",
							margin: "auto",
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<TextField
							value={form.name}
							name="name"
							label="Name"
							onChange={(e) => handleFieldChange(e)}
						/>
						<TextField
							value={form.price}
							name="price"
							label="Price"
							onChange={(e) => handleFieldChange(e)}
						/>
						<TextField
							value={form.cant}
							name="cant"
							label="Quantity"
							onChange={(e) => handleFieldChange(e)}
						/>

						<Button
							variant="contained"
							onClick={(e) => updateProducto(e, form)}
							sx={{ maxWidth: "100px" }}
						>
							Guardar
						</Button>
					</Box>
				</Container>
			)}
		</>
	);
}
