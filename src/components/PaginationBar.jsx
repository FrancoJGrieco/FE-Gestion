import { Box, Button, Container} from "@mui/material";
import { useContext } from "react";
import { PaginationContext } from "../hooks/pagination";
import { styles } from "../assets/css/styles";

export default function PaginationBar() {
  const { atras, pagina, siguiente } = useContext(PaginationContext)
  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: 2,
      justifyContent: 'center'
    }}
    >
      <Button onClick={atras} sx={styles.chevronBtn}>&lt;</Button>
      <Box
        sx={{
          marginBottom:'auto',
          marginTop:'auto',
        }}
      >{pagina}</Box>
      <Button onClick={siguiente} sx={styles.chevronBtn}>{'>'}</Button>
    </Container>
  )
}