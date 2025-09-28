import axios from "axios";

export default async function fetchDatum({ id, type }) {
	const producto = await axios.get(`${import.meta.env.VITE_API_URL}${type}/${id}`, {withCredentials: true});

	return producto.data.producto;
}
