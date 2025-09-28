import axios from "axios";

export default async function updateDatum( form, type) {
	await axios.put(`${import.meta.env.VITE_API_URL}${type}/${form.id}`, form, {withCredentials: true});
}
