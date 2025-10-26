import { Button, Container, TextField, Typography } from "@mui/material";

export default function Configuracion() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Typography
      component='h3'
      variant="h3"
      sx={{
        margin: 'auto'
      }}
      >Configuracion</Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <TextField label={'Empresa'} sx={{width: '300px', margin: 'auto'}}></TextField>
        <TextField label={'Direccion'} sx={{width: '300px', margin: 'auto'}}></TextField>
        <Button variant="contained" sx={{width: '300px', margin: 'auto'}}>Guardar</Button>
      </Container>
    </Container>
  )
}