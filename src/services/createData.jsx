import axios from "axios";

// cambiar el nombre de CreateData a createData
export default async function CreateData({ form, type }) {
  const data = await axios.post(import.meta.env.VITE_API_URL + type, form)
  return data
}