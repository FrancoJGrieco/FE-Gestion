import { Container } from "@mui/material";
import CantidadSelector from "./CantidadSelector";
import SearchBar from "./SearchBar";

export default function Filters() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        marginTop: 5

      }}
    >
      {/* Cambio de cantidad de productos */}
      <CantidadSelector />

      {/* Busqueda de productos */}
      <SearchBar />
    </Container>
  )
}