import { Container } from "@mui/material";
import CantidadSelector from "./CantidadSelector";

export default function Filters() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        marginTop: 2,
      }}
    >
      {/* Cambio de cantidad de productos */}
      <CantidadSelector />

     
    </Container>
  )
}