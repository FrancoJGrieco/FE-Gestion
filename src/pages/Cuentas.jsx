import CuentaCard from "../components/CuentaCard"
import Elementos from "../components/Elementos"
import Filters from "../components/Filters"
import ListPage from "../components/ListPage"
import useFetch from "../hooks/useFetch"

export default function Cuentas() {
  const type = 'cuentas'
  const { elementos: cuentas } = useFetch(type)

  return (
    <ListPage type={type} title={'Cuentas'}>
      <>
        <Filters />
        <Elementos elementos={cuentas} >{(cuenta) => <CuentaCard cuenta={cuenta} />}</Elementos>
      </>
    </ListPage>
  )
}
