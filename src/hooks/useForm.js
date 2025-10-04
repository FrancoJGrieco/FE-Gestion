import { useEffect, useState } from "react";
import { forms } from "../services/forms";

export default function useForm({ element = null } = {}, type) {
	const [form, setForm] = useState(forms[type]);

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
