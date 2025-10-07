import { Box, Container, IconButton, Typography } from "@mui/material";
import CreateButton from "./CreateButton";
import SearchBar from "./SearchBar";
import PaginationBar from "./PaginationBar";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useContext } from "react";
import { SearchContext } from "../hooks/search";

export default function ListPage({ type, title, children }) {
  const { changeVisibility} = useContext(SearchContext)
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

        <Box
          sx={{
            display:'flex',
            flexDirection: 'row',
          }}
        >
          <IconButton onClick={changeVisibility}><FilterAltIcon /></IconButton>
          <SearchBar type={type} />
        </Box>

      </Box>

      {children}
      {/* Barra de paginas */}
      <PaginationBar />
    </Container>
  )
}