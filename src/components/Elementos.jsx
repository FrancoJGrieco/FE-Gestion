import { Box } from "@mui/material"
import ProductoCard from "./ProductoCard"

export default function Elementos({ elementos, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        marginTop: 5
      }}
    >
      {elementos?.map((elemento) => (
        <Box key={elemento.id}>
          {children(elemento)}
        </Box>
      ))}
    </Box >
  )
}