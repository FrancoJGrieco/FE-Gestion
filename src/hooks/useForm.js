import { useEffect, useState } from "react";

export default function useForm({ element = null } = {}) {
	const [form, setForm] = useState({	name: '', codigo: '', price: 0.0, cant: 0});

	useEffect(()=>{
		if(element){
			setForm(element)
		}
	},[element])
	
	const handleFieldChange = (e) => {
		const { name, value } = e.target;

		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return { form, setForm, handleFieldChange };
}
