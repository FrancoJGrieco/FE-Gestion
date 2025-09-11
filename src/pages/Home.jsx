import { useContext, useEffect } from "react";
import { ProductosContext } from "../hooks/productos";

export default function Home() {
	const {initializeProductos} = useContext(ProductosContext)
	useEffect(()=>{
		initializeProductos()
	},[])
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}
