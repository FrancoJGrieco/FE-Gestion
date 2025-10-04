import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useFormFunctions from "../hooks/useFormFunctions";


export default function FormEmpleados() {
	const type = 'empleados'
	const typeElemento = 'empleado'
	const { handleFieldChange, handleSubmit, form, id } = useFormFunctions({ type, typeElemento })

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
							value={form?.fname ?? ''}
							name="fname"
							label="Fname"
							onChange={handleFieldChange}
						/>
						<TextField
							value={form?.lname ?? ''}
							name='lname'
							label='Lname'
							onChange={handleFieldChange}
						></TextField>

						<TextField
							value={form?.cuit ?? ''}
							name="cuit"
							label="Cuit"
							onChange={handleFieldChange}
						/>
						<TextField
							value={form?.dni ?? ''}
							name="dni"
							label="DNI"
							onChange={handleFieldChange}
						/>
						<TextField
							value={form?.mail ?? ''}
							name="mail"
							label="Mail"
							onChange={handleFieldChange}
						/>
						<TextField
							value={form?.nacimiento ?? ''}
							name="nacimiento"
							label="Nacimiento"
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
								to='/empleados'
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
