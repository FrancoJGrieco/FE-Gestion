import useFetch from "../hooks/useFetch";
import ProductoCard from "../components/ProductoCard";
import ListPage from "../components/ListPage";
import Filters from "../components/Filters";
import Elementos from "../components/Elementos";

export default function Productos() {
	const type = 'productos'
	const { elementos: productos } = useFetch(type)

	return (
		<ListPage type={type} title={'Productos'}>
			<>
				<Filters />
				<Elementos elementos={productos} >{(producto) => <ProductoCard producto={producto} />}</Elementos>
			</>
		</ListPage>
	)
}
