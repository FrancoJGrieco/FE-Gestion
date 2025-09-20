import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { PaginationContext } from "./pagination"
import { SearchContext } from "./search"

export default function useFetch(type) {
  const [elementos, setElementos] = useState([])
  const { setMaxPaginas, cantidad, pagina } = useContext(PaginationContext)
  const { busqueda } = useContext(SearchContext)

  const getElementos = async () => {
    const datos = await axios.get(import.meta.env.VITE_API_URL + type + '/' + cantidad + "/" + pagina + "/" + busqueda, { withCredentials: true })
    setElementos(datos.data[type])
    setMaxPaginas(datos.data.count / cantidad)
  }

  useEffect(() => {
    getElementos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina, cantidad, busqueda])

  return { elementos }
}