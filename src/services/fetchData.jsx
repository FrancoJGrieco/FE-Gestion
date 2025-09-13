import axios from "axios";

export default async function fetchData({ type }) {
	const productos = await axios.get(import.meta.env.VITE_API_URL + type);

	if (productos.data.success === true) return productos.data[type];

	return null;
}
