import { Box, Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useFormFunctions from "../hooks/useFormFunctions";
import axios from "axios";
import { useEffect, useState } from "react";


export default function FormCuentas() {
	const type = 'cuentas'
	const typeElemento = 'cuenta'
	const { handleFieldChange, handleSubmit, form, id } = useFormFunctions({ type, typeElemento })

	const [listaRoles, setListaRoles] = useState([])
	const getRoles = async () => {
		const { data } = await axios.get(import.meta.env.VITE_API_URL + 'roles/10000/1/', { withCredentials: true })
		setListaRoles(data.roles)
	}
	useEffect(() => {
		getRoles()
	}, [])

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
							value={form?.user_e ?? ''}
							name="user"
							label="Usuario"
							onChange={handleFieldChange}
						/>
						{id === null ?
							<TextField
								value={form?.password_e ?? ''}
								name='password'
								label='Contraseña'
								onChange={handleFieldChange}
							></TextField>
							:
							<>
								<TextField
									value={form?.password_e ?? ''}
									name='password'
									label='Contraseña Nueva'
									onChange={handleFieldChange}
								></TextField>
								<TextField
									value={form?.password_e ?? ''}
									name='password'
									label='Repetir Contraseña'
									onChange={handleFieldChange}
								></TextField>
							</>
						}
						<TextField
							value={form?.empleado_id ?? ''}
							name='empleado_id'
							label='Empleado'
							onChange={handleFieldChange}
						></TextField>
						<Select
							labelId="rol_id"
							id="rol_id"
							name="rol_id"
							value={form?.rol_id ?? ''}
							label="Rol"
							onChange={handleFieldChange}
						>
							{listaRoles?.map((rol) => (
								<MenuItem value={rol.id} key={rol.id}>{rol.nombre}</MenuItem>
							))

							}
						</Select>
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
							<Button
								variant="contained"
								onClick={() => handleSubmit()}
								sx={{ maxWidth: "100px" }}
							>
								{id ? 'Guardar' : 'Crear'}
							</Button>
						</Box>
					</Box>
				</Container>
			)}
		</>
	);
}
