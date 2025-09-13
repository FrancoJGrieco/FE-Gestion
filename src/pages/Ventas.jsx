import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import fetchData from "../services/fetchData";

export default function Ventas() {
  const [ventas, setVentas] = useState([])
  const [bVentas, setBVentas] = useState('')
  const [ventasFiltradas, setVentasFiltradas] = useState(null)
  const type = 'ventas'

  const fetchVentas = async () => {
    const ventasFetch = await fetchData({ type })
    setVentas(ventasFetch)
    setVentasFiltradas(ventasFetch)
  }

  useEffect(() => {
    fetchVentas()
  }, [])

  const updateVentasField = (e) => {
    const { value } = e.target
    setBVentas(value)
  }

  const buscarVentas = () => {
    setVentasFiltradas(ventas.filter((venta) => venta.id.toString().includes(bVentas.toString().toLowerCase())))
  }

  if (!ventasFiltradas) return <>No hay ventas</>

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 2
      }}
    >
      <Typography component={'h4'} variant="h4">Ventas</Typography>
      <TextField name='product-filter' label='Buscar venta' value={bVentas || ''} onChange={updateVentasField}></TextField>
      <Button onClick={() => buscarVentas()}>Buscar</Button>
      <Link to='/ventas/create'>Create</Link>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {ventasFiltradas?.map((venta) => (
          <Box
            key={venta.id}
            component={Link}
            to={`/ventas/info/${venta.id}`}
            state={{ venta: venta }}

          >{venta.id} - {venta.numero_ticket} - {venta.total}</Box>
        ))}
      </Box>
    </Container>
  )
}