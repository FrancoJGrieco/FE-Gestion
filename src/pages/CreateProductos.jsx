import { Box, Button, Container, TextField } from "@mui/material";
import useForm from "../hooks/useForm";
import CreateData from "../services/createData";
import { useContext } from "react";
import { ProductosContext } from "../hooks/productos";
import { useNavigate } from "react-router-dom";


export default function CreateProductos() {
  const { form, handleFieldChange } = useForm({})
  const {actualizarProductos} = useContext(ProductosContext)
  const navigate = useNavigate()
  const type = 'productos'

  const crearProducto = async () => {
    try {
      if (form.price === 0.0) {
        throw new Error("El precio no puede ser 0")
      }

      const data = await CreateData({ form, type })

      actualizarProductos(data.data.producto)

      navigate('/productos')
    } catch (err) {
      console.log(err)
    }
  }

  return (
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
        <TextField name='name' label='Name' value={form?.name ?? ''} onChange={handleFieldChange}></TextField>
        <TextField name='codigo' label='Codigo' value={form?.codigo ?? ''} onChange={handleFieldChange}></TextField>
        <TextField name='price' label='Price' value={form?.price ?? 0} onChange={handleFieldChange}></TextField>
        <TextField name='cant' label='Quantity' value={form?.cant ?? 0} onChange={handleFieldChange}></TextField>
        <Button onClick={() => crearProducto()} sx={{ maxWidth: '100px' }}>Crear</Button>
      </Box>
    </Container>
  )
}