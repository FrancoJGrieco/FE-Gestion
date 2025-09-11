import { Box, Button, Container, Select, TextField } from "@mui/material";
import CreateData from "../services/createData";
import { useContext, useState } from "react";
import { ProductosContext } from "../hooks/productos";

export default function CreateVentas() {
  const { productos, actualizarProductos } = useContext(ProductosContext)
  const [productosVenta, setProductosVentas] = useState([])
  const [form, setForm] = useState({
    producto: '',
    cantidad: ''
  })
  const type = 'ventas'

  const handleFieldChange = (e) => {
    const { value, name } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const agregarProductoLista = () => {
    const productoFiltrado = productos.find((producto) => producto.codigo === form.producto)

    const item = { producto: productoFiltrado, cantidad: form.cantidad }

    if (productoFiltrado) {
      setProductosVentas((prevState) => [...prevState, item])
    }
  }

  const crearVenta = async () => {
    const updateSuccess = await CreateData({ form: productosVenta, type })
    if (updateSuccess.data.success) {
      productosVenta.map((producto) => {
        producto.producto.cant = producto.producto.cant - producto.cantidad
        actualizarProductos(producto)
      })
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
        <TextField value={form.producto} name="producto" onChange={handleFieldChange}></TextField>
        <TextField value={form.cantidad} name="cantidad" onChange={handleFieldChange}></TextField>
        <Button onClick={() => agregarProductoLista()}>Agregar</Button>
        {productosVenta.map((productoVenta, index) => (
          <div key={index}>
            {productoVenta.producto.name} ${productoVenta.producto.price} ------- ${productoVenta.producto.price * productoVenta.cantidad}
            <br />Cantidad: {productoVenta.cantidad}
          </div>
        )
        )}

        <>Total: ${productosVenta.reduce((acumulador, valor) => (acumulador + (valor.producto.price * valor.cantidad)), 0,)}</>
        <Button onClick={() => crearVenta()} sx={{ maxWidth: '100px' }}>Crear</Button>
      </Box>
    </Container>
  )
}