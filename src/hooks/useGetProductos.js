import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";

export default function useGetProductos() {
	const [productos, setProductos] = useState(null);
	const type = 'productos'

	useEffect(() => {
		(async () => {
			const data = await fetchData({type});
			setProductos(data);
		})();
	}, []);

	return { productos };
}
