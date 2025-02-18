import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

interface useFormProps {
  onSubmit: () => void;
}

export const useFormMaterial = ({ onSubmit }: useFormProps) => {
  const { t } = useTranslation();

  const Schema = Yup.object({
    title: Yup.string().required(t("global.validation.required")),
    type: Yup.number().required(t("global.validation.required")),
    description: Yup.string().required(t("global.validation.required")),
    quantity: Yup.number().required(t("global.validation.required")),
  });

  const initialValues = {
    title: '',
    description: '',
    type: 0,
    quantity: 0,
    disponible: false
  };

  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  });
};
