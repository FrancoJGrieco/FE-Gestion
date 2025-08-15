import axios from "axios";


export default async function CreateData({ form, type }) {
  await axios.post(import.meta.env.VITE_API_URL + type, form)
}