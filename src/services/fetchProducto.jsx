import axios from "axios";

export default async function fetchProducto(id) {
	const producto = await axios.get(`http://localhost:5433/productos/${id}`);

	return producto.data.producto;
}
