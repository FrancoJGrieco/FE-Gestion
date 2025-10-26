import { useLocation, useNavigate } from "react-router-dom";
import useInitializeElemento from "./useInitializeElemento";
import createData from "../services/createData";
import updateDatum from "../services/updateDatum";
import { useEffect, useState } from "react";
import { forms } from "../services/forms";

export default function useFormFunctions({ type, typeElemento }) {
  const [form, setForm] = useState(forms[type]);
  const navigate = useNavigate()
  const location = useLocation()
  const id = location.state?.id ?? null
  const { elemento } = useInitializeElemento(id, type, typeElemento)

  useEffect(() => {
    setForm(elemento)  
  }, [elemento])

  const handleSubmit = async () => {
    try {
      if (id) await updateDatum({ form, type })
      else await createData({ form, type })
      navigate(`/${type}`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return { id, handleFieldChange, handleSubmit, form }
}