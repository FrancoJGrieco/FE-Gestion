import { useContext } from "react";
import Elementos from "../components/Elementos";
import EmpleadoCard from "../components/EmpleadoCard";
import EmpleadosFilters from "../components/EmpleadosFIlters";
import ListPage from "../components/ListPage";
import { EmpleadosProvider } from "../hooks/empleados";
import useFetch from "../hooks/useFetch";
import { SearchContext } from "../hooks/search";

export default function Empleados() {
  const type = 'empleados'
  const { elementos: empleados } = useFetch(type)
  const { showFilters } = useContext(SearchContext)

  return (
    <ListPage type={type} title={'Empleados'}>
      <EmpleadosProvider>
        {showFilters?<EmpleadosFilters />: <></>}
        <Elementos elementos={empleados} >{(empleado) => <EmpleadoCard empleado={empleado} />}</Elementos>
      </EmpleadosProvider>
    </ListPage>
  )
}