import { useEffect, useState } from "react";
import fetchDatum from "../services/fetchDatum";
import { forms } from "../services/forms";

export default function useInitializeElemento(id, type, elementType) {
	const [elemento, setElemento] = useState(null);

	useEffect(() => {
		(async () => {
			if (id) {
				const data = await fetchDatum({id, type, elementType});
				setElemento(data);
			} else {
				console.log('hola')
				setElemento(forms[type]);
			}
		})();
	}, [id]);

	return { elemento };
}
