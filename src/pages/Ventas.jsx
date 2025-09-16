import ListPage from "../components/ListPage"
import VentaCard from "../components/VentaCard"
import useFetch from "../hooks/useFetch"

export default function Ventas() {
  const type = 'ventas'
  const { elementos: ventas } = useFetch(type)

  return (
    <ListPage type={type} title={'Ventas'} elementos={ventas}>
      {(venta) => <VentaCard venta={venta} />}
    </ListPage>
  )
}