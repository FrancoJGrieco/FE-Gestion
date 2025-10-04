import { useLocation, useNavigate } from "react-router-dom";
import useInitializeElemento from "./useInitializeElemento";
import useForm from "./useForm";
import createData from "../services/createData";
import updateDatum from "../services/updateDatum";
import { useEffect } from "react";

export default function useFormFunctions({ type, typeElemento }) {
  const location = useLocation();
  const id = location.state?.id;
  const { elemento } = useInitializeElemento(id, type, typeElemento);
  const navigate = useNavigate()
  const { form, setForm, handleFieldChange } = useForm();
  console.log(form)

  useEffect(() => {
    setForm(elemento)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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



  return { id, handleFieldChange, handleSubmit, form }
}