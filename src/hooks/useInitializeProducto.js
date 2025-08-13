import { useEffect, useState } from "react";
import fetchProducto from "../services/fetchProducto";
import { productosForm } from "../services/productos/productosForm";

export default function useInitializeProducto(id) {
	const [producto, setProducto] = useState(null);

	useEffect(() => {
		(async () => {
			if (id) {
				const data = await fetchProducto(id);
				setProducto(data);
			} else {
				setProducto(productosForm);
			}
		})();
	}, [id]);

	return { producto };
}
