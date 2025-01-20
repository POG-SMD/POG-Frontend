import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

interface useFormSignInProps {
  onSubmit: () => void;
}

export const useFormSignIn = ({ onSubmit }: useFormSignInProps) => {
  const { t } = useTranslation();

  const Schema = Yup.object({
      email: Yup.string()
        .email(t("global.validation.invalidEmail"))
        .required(t("global.validation.required")),
      password: Yup.string().required(t("global.validation.required")),
    });
  

  const initialValues = {
    email: "",
    password: "",
  };

  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  });
};
