import { Box, Button, Container, TextField } from "@mui/material";
import { Link} from "react-router-dom";
import useFormFunctions from "../hooks/useFormFunctions";


export default function FormProductos() {
	const type = 'productos'
	const typeElemento = 'producto'
	const { handleFieldChange, handleSubmit, form, id } = useFormFunctions({ type, typeElemento })

	return (
		<>
			{form && (
				<Container>
					{console.log(form)}
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
								to={`/${type}`}
								sx={{ maxWidth: "100px" }}
							>
								atras
							</Button>

							{id ?
								<Button
									variant="contained"
									onClick={() => handleSubmit()}
									sx={{ maxWidth: "100px" }}
								>
									Guardar
								</Button>
								:
								<Button
									variant="contained"
									onClick={() => handleSubmit()}
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
