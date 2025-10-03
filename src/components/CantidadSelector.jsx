import { Box, Container, MenuItem, Select, Typography } from "@mui/material";
import { useContext } from "react";
import { PaginationContext } from "../hooks/pagination";

export default function CantidadSelector() {
  const { cantidad, cambiarCantidad } = useContext(PaginationContext)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      <Box
      sx={{
        marginTop: 'auto',
        marginBottom: 'auto',
      }}
      >
        <Typography sx={{fontSize: '1.2rem'}}>Cantidad</Typography>
      </Box>
      <Select
        value={cantidad}
        onChange={cambiarCantidad}
        size="small"
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </Box>
  )
}