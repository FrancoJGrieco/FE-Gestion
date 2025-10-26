import axios from "axios";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const VentasGraficoContext = createContext();

export function VentasGraficoProvider({ children }) {
  const [ventasGrafico, setVentasGrafico] = useState([])
  const [range, setRange] = useState([
    {
      startDate: new Date(2025, 8, 12),
      endDate: new Date(),
      key: "selection"
    }
  ])

  const setItemRange = (item) => {
    setRange([item.selection])
  }

  const fetchVentasGrafico = async () => {
    console.log(range)
    const { data } = await axios.get(import.meta.env.VITE_API_URL + "ventas/fecha/" + range[0].startDate + '/' + range[0].endDate, {withCredentials: true})
    console.log(data.ventas)
    setVentasGrafico(data.ventas)
  }

  return (<VentasGraficoContext.Provider value={{
    ventasGrafico,
    range,
    setItemRange,
    fetchVentasGrafico
  }}>
    {children}
  </VentasGraficoContext.Provider>)
}