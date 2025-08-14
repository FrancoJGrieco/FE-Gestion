import axios from "axios";

export default async function CreateProducto({form}){
  await axios.post('http://localhost:5433/productos', form)
}