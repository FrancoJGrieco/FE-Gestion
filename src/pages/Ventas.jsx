import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom";


export default function Ventas() {
  const ventas = []
  const [bVentas, setBVentas] = useState()
  const [ventasFiltradas, setVentasFiltradas] = useState()

  const updateVentasField = (e) => {
    const { value } = e.target
    setBVentas(value)
  }

  const buscarVentas = () => {
    setVentasFiltradas(ventas.filter((venta) => venta.id.toLowerCase().includes(bVentas.toLowerCase())))
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
      <Typography component={'h4'} variant="h4">Ventas</Typography>
      <TextField name='product-filter' label='Buscar venta' value={bVentas || ''} onChange={updateVentasField}></TextField>
      <Button onClick={()=> buscarVentas()}>Buscar</Button>
      <Link to='/ventas/create'>Create</Link>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {ventasFiltradas?.map((venta) => (
          <>{venta.id} - {venta.total}</>
        ))}
      </Box>
    </Container>
  )
}