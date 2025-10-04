import axios from "axios";

export default async function createData({ form, type }) {
  const data = await axios.post(import.meta.env.VITE_API_URL + type, form, {withCredentials: true})
  return data
}