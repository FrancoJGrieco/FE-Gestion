import { Box, Button, Container, TextField } from "@mui/material";
import useForm from "../hooks/useForm";
import CreateData from "../services/createData";

export default function CreateProductos() {

  const { form, handleFieldChange } = useForm({})
  console.log(form)
  const type = 'productos'

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
        <TextField name='name' label='Name' value={form?.name ?? ''} onChange={(e) => handleFieldChange(e)}></TextField>
        <TextField name='price' label='Price' value={form?.price ?? 0} onChange={(e) => handleFieldChange(e)}></TextField>
        <TextField name='cant' label='Quantity' value={form?.cant ?? 0} onChange={(e) => handleFieldChange(e)}></TextField>
        <Button onClick={() => CreateData({ form, type })} sx={{ maxWidth: '100px' }}>Crear</Button>
      </Box>
    </Container>
  )
}