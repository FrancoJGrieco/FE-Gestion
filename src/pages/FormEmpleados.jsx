import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import updateDatum from "../services/updateDatum";
import { useNavigate } from "react-router-dom";
import CreateData from "../services/createData";
import useInitializeElemento from "../hooks/useInitializeElemento";


export default function FormEmpleados() {
	const location = useLocation();
	const id = location.state?.id;
	const { elemento: empleado } = useInitializeElemento(id, 'empleados', 'empleado');
	console.log(empleado)
	const navigate = useNavigate()
	const type = 'empleados'
	const { form, handleFieldChange } = useForm({ element: empleado });

	const crearEmpleado = async () => {
		try {
			if (form.fname === '') {
				throw new Error("Se requiere nombre del empleado")
			}

			await CreateData({ form, type })

			navigate('/empleados')
		} catch (err) {
			console.log(err)
		}
	}

	const updateEmpleado = async () => {
		updateDatum(form, type)
		navigate('/empleados')
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
									onClick={() => updateEmpleado()}
									sx={{ maxWidth: "100px" }}
								>
									Guardar
								</Button>
								:
								<Button
									variant="contained"
									onClick={() => crearEmpleado()}
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
