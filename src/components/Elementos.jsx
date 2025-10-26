import { Box } from "@mui/material"
import ProductoCard from "./ProductoCard"

export default function Elementos({ elementos, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
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