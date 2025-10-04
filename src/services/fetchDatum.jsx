import axios from "axios";

export default async function fetchDatum({ id, type, elementType }) {
	console.log('hola')
	const datum = await axios.get(`${import.meta.env.VITE_API_URL}${type}/${id}`, {withCredentials: true});
	return datum.data[elementType];
}
