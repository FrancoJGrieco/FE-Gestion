
import { Box, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import DateRangePicker from "../components/DateRangePicker";
import { VentasGraficoContext, VentasGraficoProvider } from "../hooks/ventasGrafico";

export default function Home() {
	const type = 'ventas'
	const [ventas, setVentas] = useState([])
	const [empleados, setEmpleados] = useState([])
	const [ventasEmpleado, setVentasEmpleado] = useState([])
	const { ventasGrafico } = useContext(VentasGraficoContext)

	const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState('')

	const fetchVentas = async () => {
		const { data } = await axios.get(import.meta.env.VITE_API_URL + type, { withCredentials: true })
		setVentas(data.ventas)
	}

	const fetchEmpleados = async () => {
		const { data } = await axios.get(import.meta.env.VITE_API_URL + 'empleados', { withCredentials: true })
		setEmpleados(data.empleados)
	}

	const fetchVentasEmpleados = async () => {
		const { data } = await axios.get(import.meta.env.VITE_API_URL + 'ventas/empleado/' + empleadoSeleccionado, { withCredentials: true })
		setVentasEmpleado(data.ventas)
	}

	const handleEmpleadoChange = (e) => {
		setEmpleadoSeleccionado(e.target.value)
	}

	useEffect(() => {
		fetchVentas()
		fetchEmpleados()
	}, [])

	useEffect(() => {
		if (empleadoSeleccionado !== '')
			fetchVentasEmpleados()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [empleadoSeleccionado])

	if (!ventas) return <>No hay ventas</>

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 2
			}}
		>
			<Typography variant="h3" sx={{ margin: 'auto' }}>Home</Typography>
			{/* grafico con fecha */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 2,
					width: '35vw',
					border: 'outset',
					borderColor: 'black'
				}}
			>
					<DateRangePicker />
					{console.log(ventasGrafico)}
					<LineChart width={600} height={300} data={ventasGrafico}>
						<CartesianGrid />
						<Line dataKey="total" />
						<XAxis dataKey='numero_ticket' />
						<YAxis />
						<Legend />
					</LineChart>
			</Box>
			{/* Grafico empleados */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 2,
					width: '35vw',
					border: 'outset',
					borderColor: 'black'
				}}
			>
				<Select onChange={handleEmpleadoChange} value={empleadoSeleccionado}
					sx={{
						width: '50%',
						marginTop: '1em',
						marginLeft: '1em'
					}}
				>
					{empleados?.map((empleado) => (
						<MenuItem value={empleado.id} key={empleado.id}>{empleado.fname}</MenuItem>
					))}
				</Select>
				<LineChart width={600} height={300} data={ventasEmpleado}>
					<CartesianGrid />
					<Line dataKey="total" />
					<XAxis dataKey='numero_ticket' />
					<YAxis />
					<Legend />
				</LineChart>
			</Box>
			<Box
				component={Link}
				to='/ventas'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 2,
					width: '35vw',
					height: 'fit-content',
					borderRadius: 1,
					'&:hover': {
						bgcolor: 'gray',
					},
					textDecoration: 'none',
					border: 'outset',
					borderColor: 'black'
				}}
			>
				<Typography sx={{ width: 'fit-content', margin: 'auto' }} variant="h5">Ventas</Typography>
				<LineChart width={600} height={300} data={ventas}>
					<CartesianGrid />
					<Line dataKey="total" />
					<XAxis dataKey='numero_ticket' />
					<YAxis />
					<Legend />
				</LineChart>
			</Box>
		</Container>
	);
}
