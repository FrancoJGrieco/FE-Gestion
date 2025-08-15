import { useEffect, useState } from "react";
import fetchDatum from "../services/fetchDatum";
import { productosForm } from "../services/productos/productosForm";

export default function useInitializeProducto(id) {
	const [producto, setProducto] = useState(null);
	const type = 'productos'

	useEffect(() => {
		(async () => {
			if (id) {
				const data = await fetchDatum({id, type});
				setProducto(data);
			} else {
				setProducto(productosForm);
			}
		})();
	}, [id]);

	return { producto };
}
