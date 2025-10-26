import { useContext } from "react";
import { AuthContext } from "../hooks/auth";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {
  const { loggedIn, checkAuth} = useContext(AuthContext)

  useEffect(() => {
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loggedIn === null) return <Typography>Loading</Typography>


  if (loggedIn === false) return <Navigate to='/login' />

  return (
    <>{props.children}</>
  )

}