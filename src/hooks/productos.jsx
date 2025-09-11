import { createContext, useState } from "react"
import fetchData from "../services/fetchData";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([])

  const initializeProductos = async () => {
      const data = await fetchData({ type: 'productos' });
      setProductos(data);
  }

  const actualizarProductos = async (producto) => {
    setProductos((prevState) => ([...prevState, producto] ))
  }

  return (
    <ProductosContext.Provider value={{
      productos,
      initializeProductos,
      actualizarProductos
    }}>
      {children}
    </ProductosContext.Provider>
  )
}