import { Button, Container, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/auth";

export default function Login() {

  const navigate = useNavigate()
  const {loginForm, updateLoginFormField, login} = useContext(AuthContext)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login()
      setError(null)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión')
    }
  }
  if (!loginForm) return <></>
  return (
    <Container
      component='form'
      onSubmit={handleLogin}
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
      <Typography variant='h4'>Login</Typography>

      <TextField
        name='user'
        label='Usuario'
        type='text'
        value={loginForm.user || ''}
        onChange={updateLoginFormField}
      />
      <TextField
        name='password'
        label='Contraseña'
        type='password'
        value={loginForm.password || ''}
        onChange={updateLoginFormField}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button type='submit'>Login</Button>
    </Container>
  )
}