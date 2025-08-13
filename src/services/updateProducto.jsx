import axios from "axios";

export default async function updateProducto(e, form) {
	await axios.put(`http://localhost:5433/productos/${form.id}`, form);
}
