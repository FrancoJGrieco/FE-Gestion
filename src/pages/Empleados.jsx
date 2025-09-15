import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Empleados() {
  const [empleados, setEmpleados] = useState(null)
  const [bEmpleados, setBEmpleados] = useState("")
  const [empleadosFiltrados, setEmpleadosFiltrados] = useState([])
  const type = "empleados"

  // Actualiza el campo de busqueda de empleados
  const updateEmpleadosField = (e) => {
    const { value } = e.target
    setBEmpleados(value)
  }

  // Inicializa el estado empleados en la pagina
  const getEmpleados = async () => {
    const datos = await axios.get(import.meta.env.VITE_API_URL + type)
    console.log(datos)
    setEmpleados(datos.data.empleados)
  }

  useEffect(() => {
    getEmpleados()
  }, [])

  // Inicializa el estado de empleados filtrados
  useEffect(() => {
    setEmpleadosFiltrados(empleados)
  }, [empleados])

  // Actualiza los empleados cuando se buscan
  const buscarEmpleado = () => {
    setEmpleadosFiltrados(empleados.filter((empleado) => empleado.fname.toLowerCase().includes(bEmpleados.toLowerCase())))
  }

  if (!empleados) return <>No se han cargado los empleados</>

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 2
      }}
    >
      {/* Busqueda de empleados */}
      <Typography component={'h4'} variant="h4">Empleados</Typography>
      <TextField name='product-filter' label='Buscar empleado' value={bEmpleados || ''} onChange={updateEmpleadosField}></TextField>
      <Button onClick={() => buscarEmpleado()}>Buscar</Button>

      {/* Creacion de empleados */}
      <Link to='/empleados/create'>Create</Link>

      {/* Empleados */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {empleadosFiltrados?.map((empleado) => (
          <div key={empleado.id}>hola{empleado.fname} <br /></div>
        ))}
      </Box>
    </Container>
  )
}