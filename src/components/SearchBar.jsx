import { Button, Container, TextField, Typography } from "@mui/material";
import { SearchContext } from "../hooks/search";
import { useContext } from "react";

export default function SearchBar() {
  const { searchInput, handleSearchInputChange, buscarElemento } = useContext(SearchContext)
  return (
    <Container
      sx={{
        width: 'fit-content',
        heigth: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        margin: 0
      }}
    >
      <TextField
        name='product-filter'
        label='Buscar'
        value={searchInput || ''}
        onChange={handleSearchInputChange}
        sx={{
          width: 250,
        }}
        size="small"
      ></TextField>
      <Button onClick={buscarElemento}>Buscar</Button>
    </Container>
  )
}