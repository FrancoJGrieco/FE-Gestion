import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const [cantidad, setCantidad] = useState(10)
  const [maxPaginas, setMaxPaginas] = useState(1)
  const [pagina, setPagina] = useState(1)

  const atras = () => {
    if (pagina > 1) setPagina(pagina - 1)
  }

  const siguiente = () => {
    if (pagina < maxPaginas) setPagina(pagina + 1)
  }

  const cambiarCantidad = (e) => {
    const { value } = e.target
    setCantidad(value)
    setPagina(1)
  }

  return (
    <PaginationContext.Provider value={{
      cantidad,
      pagina,
      atras,
      siguiente,
      cambiarCantidad,
      setMaxPaginas,
      setPagina,
      setCantidad
    }}>
      {children}
    </PaginationContext.Provider>
  )
}