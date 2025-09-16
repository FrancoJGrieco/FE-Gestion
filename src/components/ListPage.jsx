import { Container, Typography } from "@mui/material";
import CreateButton from "./CreateButton";
import Filters from "./Filters";
import Elementos from "./Elementos";
import PaginationBar from "./paginationBar";

export default function ListPage({ type, title, elementos, children }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 2
      }}
    >
      <Typography component={'h4'} variant="h4">{title}</Typography>

      {/* Creacion de elementos */}
      <CreateButton type={type} />

      {/* Filtros */}
      <Filters />

      {/* Elementos */}
      <Elementos elementos={elementos} >{children}</Elementos>

      {/* Barra de paginas */}
      <PaginationBar />
    </Container>
  )
}