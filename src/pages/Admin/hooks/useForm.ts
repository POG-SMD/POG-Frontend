import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

interface useFormProps {
  onSubmit: () => void;
}

export const useFormRegister = ({ onSubmit }: useFormProps) => {
  const { t } = useTranslation();

  const Schema = Yup.object({
    name: Yup.string().required(t("global.validation.required")),
    role: Yup.string(),
    email: Yup.string()
      .email(t("global.validation.invalidEmail"))
      .required(t("global.validation.required")),
    password: Yup.string().required(t("global.validation.required")),
  });

  const initialValues = {
    email: "",
    password: "",
    name: '',
    role: 'USER'
  };

  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  });
};
