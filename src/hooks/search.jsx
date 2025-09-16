import { createContext, useContext, useState } from "react"
import { PaginationContext } from "./pagination";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [busqueda, setBusqueda] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const { setPagina } = useContext(PaginationContext)

  const buscarElemento = () => {
    setPagina(1)
    setBusqueda(searchInput)
  }

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <SearchContext.Provider value={{
      busqueda,
      searchInput,
      buscarElemento,
      handleSearchInputChange
    }}>
      {children}
    </SearchContext.Provider>
  )
}