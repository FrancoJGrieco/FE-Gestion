import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { PaginationContext } from "./pagination"
import { SearchContext } from "./search"

export default function useFetch(type) {
  const [elementos, setElementos] = useState([])
  const { setMaxPaginas, cantidad, pagina } = useContext(PaginationContext)
  const { filtros, buscar } = useContext(SearchContext)

  const getElementos = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + type + "/" + cantidad + "/" + pagina, {
      params: filtros,
      withCredentials: true
    })
    console.log(data)
    setElementos(data[type])
    setMaxPaginas(data.count / cantidad)
  }

  useEffect(() => {
    getElementos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina, cantidad, buscar])

  return { elementos }
}