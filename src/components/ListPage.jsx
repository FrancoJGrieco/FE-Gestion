import { Box, Container, Typography } from "@mui/material";
import CreateButton from "./CreateButton";
import Filters from "./Filters";
import Elementos from "./Elementos";
import PaginationBar from "./paginationBar";
import SearchBar from "./SearchBar";

export default function ListPage({ type, title, elementos, children }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 2,
        borderRadius: '20px',
        backgroundColor: '#F3F4F6',
        height: '85vh',
        minHeight: 'fit-content'
      }}
    >
      <Typography
        component="h3"
        variant="h3"
        sx={{
          marginTop: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >{title}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Creacion de elementos */}
        <CreateButton type={type} />

        {/* Busqueda de productos */}
        <SearchBar />
      </Box>

      {/* Filtros */}
      <Filters />

      {/* Elementos */}
      <Elementos elementos={elementos} >{children}</Elementos>

      {/* Barra de paginas */}
      <PaginationBar />
    </Container>
  )
}