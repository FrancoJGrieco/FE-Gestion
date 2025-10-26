import Elementos from "../components/Elementos"
import Filters from "../components/Filters"
import ListPage from "../components/ListPage"
import VentaCard from "../components/VentaCard"
import useFetch from "../hooks/useFetch"

export default function Ventas() {
  const type = 'ventas'
  const { elementos: ventas } = useFetch(type)

  return (
    <ListPage type={type} title={'Ventas'}>
      <>
        <Filters />
        <Elementos elementos={ventas} >{(venta) => <VentaCard venta={venta} />}</Elementos>
      </>
    </ListPage>
  )
}