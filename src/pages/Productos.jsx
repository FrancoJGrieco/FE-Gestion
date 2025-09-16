import useFetch from "../hooks/useFetch";
import ProductoCard from "../components/ProductoCard";
import ListPage from "../components/ListPage";

export default function Productos() {
	const type = 'productos'
	const { elementos: productos } = useFetch(type)

	return (
		<ListPage type={type} title={'Productos'} elementos={productos}>
			{(producto) => <ProductoCard producto={producto} />}
		</ListPage>
	)
}
