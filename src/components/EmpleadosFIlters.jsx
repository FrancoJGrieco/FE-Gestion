import { Box, Button, Container, MenuItem, Select } from "@mui/material";
import CantidadSelector from "./CantidadSelector";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EmpleadosFilters() {
  const [rolFiltro, setRolFiltro] = useState('')
  const [listaRoles, setListaRoles] = useState([])

  const handleFieldChange = (e) => {
    const { value } = e.target
    setRolFiltro(value)
  }

  const getRoles = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + 'roles/10000/1/', { withCredentials: true })
    setListaRoles(data.roles)
  }
  useEffect(() => {
    getRoles()
  }, [])

  const buscarPorRol = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + "/" + rolFiltro)
    console.log(data)
    //hacer un context para manejar a los empleados
  }

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
            value={rolFiltro ?? ""}
            label="Rol"
            onChange={handleFieldChange}
          >
            {listaRoles.map((rol) => (
              <MenuItem value={rol.id}>{rol.nombre}</MenuItem>
            ))}
          </Select>
        )}
        <Button onClick={buscarPorRol}></Button>
      </Box>
      <CantidadSelector />
    </Box>
  )
}