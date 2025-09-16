import EmpleadoCard from "../components/CuentaCard";
import ListPage from "../components/ListPage";
import useFetch from "../hooks/useFetch";

export default function Empleados() {
  const type = 'empleados'
  const { elementos: empleados } = useFetch(type)

  return (
    <ListPage type={type} title={'Empleados'} elementos={empleados}>
      {(empleado) => <EmpleadoCard empleado={empleado} />}
    </ListPage>
  )
}