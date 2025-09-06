import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ProductoCard from "../components/ProductoCard";
import useGetProductos from "../hooks/useGetProductos";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Productos() {
	const { productos } = useGetProductos()
	const [bProductos, setBProductos] = useState("")
	const [productosFiltrados, setProductosFiltrados] = useState([])

	const updateProductosField = (e) => {
		const {value} = e.target
		setBProductos(value)
	}

	useEffect(()=>{
		setProductosFiltrados(productos)
	},[productos])

	const buscarProducto = () => {
		setProductosFiltrados(productos.filter((producto) => producto.name.toLowerCase().includes(bProductos.toLowerCase())))
	}

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
			<TextField name='product-filter' label='Buscar producto' value={bProductos || ''} onChange={updateProductosField}></TextField>
			<Button onClick={()=> buscarProducto()}>Buscar</Button>
			<Link to='/productos/create'>Create</Link>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{productosFiltrados?.map((producto) => (
					<ProductoCard key={producto.id} producto={producto} />
				))}
			</Box>
		</Container>
	)
}
