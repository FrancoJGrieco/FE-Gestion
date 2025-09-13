import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";

export default function InfoVenta() {
  const location = useLocation()
  const id = location.state.venta.id
  const type = 'detalle_ventas'
  const [infoVenta, setInfoVenta] = useState(null)

  const fetchInfoVenta = async () => {
    console.log(import.meta.env.VITE_API_URL + 'ventas' + '/' + type + '/' + id)
    const info = await axios.get(import.meta.env.VITE_API_URL + 'ventas' + '/' + type + '/' + id);
    setInfoVenta(info.data.detalleVenta)
    console.log(info)
  }

  useEffect(() => {
    fetchInfoVenta()
  }, [])

  if (!infoVenta) return <>No se han cargado los datos</>

  return (
    <Container>
      <Typography>id: {id}</Typography>
      {infoVenta?.map((info) => (
        <Typography>{info.id} -- {info.producto}-- {info.cantidad}-- {info.precio}</Typography>
      ))}
    </Container>
  )
}