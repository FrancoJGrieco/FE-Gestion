import axios from "axios";

export default async function CreateProducto({form}){
  console.log(form)
  await axios.post('http://localhost:5433/productos', form)
}