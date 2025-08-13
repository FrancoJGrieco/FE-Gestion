import axios from "axios";

export default async function fetchProductos() {
	const productos = await axios.get("http://localhost:5433/productos");

	if (productos.data.success === true) return productos.data.productos;

	return null;
}
