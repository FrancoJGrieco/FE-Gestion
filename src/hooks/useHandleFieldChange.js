export default function FieldChange() {
	const [form, setForm] = null;

	const handleFieldChange = (e) => {
		const { name, value } = e.target;

		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return { form, handleFieldChange };
}
