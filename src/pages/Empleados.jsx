import Elementos from "../components/Elementos";
import EmpleadoCard from "../components/EmpleadoCard";
import EmpleadosFilters from "../components/EmpleadosFIlters";
import ListPage from "../components/ListPage";
import { EmpleadosProvider } from "../hooks/empleados";
import useFetch from "../hooks/useFetch";

export default function Empleados() {
  const type = 'empleados'
  const { elementos: empleados } = useFetch(type)

  return (
    <ListPage type={type} title={'Empleados'}>
      <EmpleadosProvider>
        <EmpleadosFilters />
        <Elementos elementos={empleados} >{(empleado) => <EmpleadoCard empleado={empleado} />}</Elementos>
      </EmpleadosProvider>
    </ListPage>
  )
}