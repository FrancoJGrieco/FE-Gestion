import { useEffect, useState } from "react";
import fetchProductos from "../services/fetchProductos";

export default function useGetProductos() {
	const [productos, setProductos] = useState(null);

	useEffect(() => {
		(async () => {
			const data = await fetchProductos();
			setProductos(data);
		})();
	}, []);

	return { productos };
}
