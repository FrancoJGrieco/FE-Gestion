import { Button, Container, TextField, Typography } from "@mui/material";
import { SearchContext } from "../hooks/search";
import { useContext } from "react";

export default function SearchBar({ type }) {
  const { filtros, handleFilterInputChange, buscarElemento } = useContext(SearchContext)
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
        name='busqueda'
        label='Buscar'
        value={filtros[type].busqueda || ''}
        onChange={(e) => {handleFilterInputChange(e, [type])}}
        sx={{
          width: 250,
        }}
        size="small"
      ></TextField>
      <Button onClick={buscarElemento}>Buscar</Button>
    </Container>
  )
}