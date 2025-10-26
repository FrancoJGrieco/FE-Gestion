import { createContext, useContext, useState } from "react";
import axios from "axios";
import { PaginationContext } from "./pagination";

export const EmpleadosContext = createContext();

export function EmpleadosProvider({ children }) {
  const [empleados, setEmpleados] = useState([])
  const [rolFiltro, setRolFiltro] = useState(null)
  const { setPagina, setCantidad, pagina, cantidad } = useContext(PaginationContext)

  const handleFieldChange = (e) => {
    const { value } = e.target
    setRolFiltro(value)
  }

  // /empleados/rol/:cantidad/:pagina
  const buscarPorRol = async () => {
    setPagina(1)
    setCantidad(10)
    const res = await axios.get(import.meta.env.VITE_API_URL + `empleados/rol/${cantidad}/${pagina}`, {
      params: { busqueda: '', rol_id: rolFiltro },
      withCredentials: true
    })
    console.log(res)
  }

  return (
    <EmpleadosContext.Provider value={{
      empleados,
      setEmpleados,
      buscarPorRol,
      handleFieldChange,
      rolFiltro
    }}>
      {children}
    </EmpleadosContext.Provider>
  )
}