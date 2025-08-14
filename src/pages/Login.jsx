import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login(){
  return(
    <>
      <TextField id='username' label='Usuario'></TextField>
      <TextField id='password' label='Contraseña'></TextField>
      <Button component={Link} to={'/'}>Ingresar</Button>
    </>
  )
}