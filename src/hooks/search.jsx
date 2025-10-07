import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [filtros, setFiltros] = useState({
    empleados: {
      busqueda: '',
      rol_id: null
    }
  })
  const [buscar, setBuscar] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const buscarElemento = () => {
    setBuscar(!buscar)
  }

  const changeVisibility = ()=>{
    setShowFilters(!showFilters)
  }

  const handleFilterInputChange = (e, page) => {
    const { name, value } = e.target
    setFiltros((prevState) => ({ ...prevState, [page]: { ...prevState[page], [name]: value } }))
    console.log(filtros.empleados)
  }

  return (
    <SearchContext.Provider value={{
      filtros,
      buscarElemento,
      handleFilterInputChange,
      buscar,
      setBuscar,
      showFilters,
      changeVisibility
    }}>
      {children}
    </SearchContext.Provider>
  )
}