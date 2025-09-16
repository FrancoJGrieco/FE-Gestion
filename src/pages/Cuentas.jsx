import CuentaCard from "../components/CuentaCard"
import ListPage from "../components/ListPage"
import useFetch from "../hooks/useFetch"

export default function Cuentas() {
  const type = 'cuentas'
  const { elementos: cuentas } = useFetch(type)

  return (
    <ListPage type={type} title={'Cuentas'} elementos={cuentas}>
      {(cuenta) => <CuentaCard cuenta={cuenta} />}
    </ListPage>
  )
}