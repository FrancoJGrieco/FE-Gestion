import axios from "axios";

export default async function removeProducto(id){
  await axios.delete(`http://localhost:5433/productos/${id}`)
}