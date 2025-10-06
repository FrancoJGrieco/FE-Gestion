import axios from "axios";

export default async function removeDatum({ id, type }) {
  await axios.delete(`${import.meta.env.VITE_API_URL}${type}/${id}`, { withCredentials: true })
}