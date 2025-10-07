import { Box, Button, Container, MenuItem, Select } from "@mui/material";
import CantidadSelector from "./CantidadSelector";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "../hooks/search";

export default function EmpleadosFilters() {
  const [listaRoles, setListaRoles] = useState([])
  const { handleFilterInputChange, filtros, buscarElemento } = useContext(SearchContext)

  const getRoles = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + 'roles/10000/1/', { withCredentials: true })
    setListaRoles(data.roles)
  }
  useEffect(() => {
    getRoles()
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        marginTop: 2,
      }}
    >
      <Box>
        {listaRoles?.length > 0 && (
          <Select
            labelId="rol_id-label"
            id="rol_id"
            name="rol_id"
            value={filtros.empleados.rol_id ?? ""}
            label="Rol"
            onChange={(e)=>{handleFilterInputChange(e, 'empleados')}}
            sx={{
              width: '250px'
            }}
          >
            <MenuItem value={null}>Ninguno</MenuItem>
            {listaRoles.map((rol) => (
              <MenuItem value={rol.id}>{rol.nombre}</MenuItem>
            ))}
          </Select>
        )}
        <Button onClick={buscarElemento}>Buscar</Button>
      </Box>
      <CantidadSelector />
    </Box>
  )
}