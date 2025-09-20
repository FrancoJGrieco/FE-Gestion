import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import useGetProducto from "../hooks/useInitializeProducto";
import updateDatum from "../services/updateDatum";
import { useNavigate } from "react-router-dom";
import CreateData from "../services/createData";


export default function FormProductos() {
	const location = useLocation();
	const id = location.state?.id;
	const { producto } = useGetProducto(id);
	const navigate = useNavigate()
	const type = 'productos'
	const { form, handleFieldChange } = useForm({ element: producto });

	const crearProducto = async () => {
		try {
			if (form.price === 0.0) {
				throw new Error("El precio no puede ser 0")
			}

			await CreateData({ form, type })

			navigate('/productos')
		} catch (err) {
			console.log(err)
		}
	}

	const updateProducto = async () => {
		updateDatum(form, type)
		navigate('/productos')
	}

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
							value={form?.name ?? ''}
							name="name"
							label="Name"
							onChange={handleFieldChange}
						/>
						<TextField
							name='codigo'
							label='Codigo'
							value={form?.codigo ?? ''}
							onChange={handleFieldChange}
						></TextField>

						<TextField
							value={form?.price ?? ''}
							name="price"
							label="Price"
							onChange={handleFieldChange}
						/>
						<TextField
							value={form?.cant ?? ''}
							name="cant"
							label="Quantity"
							onChange={handleFieldChange}
						/>

						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
						>

							<Button
								variant="contained"
								component={Link}
								to='/productos'
								sx={{ maxWidth: "100px" }}
							>
								atras
							</Button>

							{id ?
								<Button
									variant="contained"
									onClick={() => updateProducto()}
									sx={{ maxWidth: "100px" }}
								>
									Guardar
								</Button>
								:
								<Button
									variant="contained"
									onClick={() => crearProducto()}
									sx={{ maxWidth: '100px' }}
								>
									Crear
								</Button>
							}
						</Box>
					</Box>
				</Container>
			)}
		</>
	);
}
