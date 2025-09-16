import { useState } from "react";

export default function useHandleFieldChange() {
	const [form, setForm] = useState(null);

	const handleFieldChange = (e) => {
		const { name, value } = e.target;

		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return { form, handleFieldChange, };
}
