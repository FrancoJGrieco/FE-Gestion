import { useEffect, useState } from "react";
import fetchDatum from "../services/fetchDatum";

export default function useInitializeProducto(id) {
	const [venta, setVenta] = useState(null);
	const type = 'ventas'

	useEffect(() => {
		(async () => {
			if (id) {
				const data = await fetchDatum({id, type});
				setVenta(data);
			}
		})();
	}, [id]);

	return { venta };
}
