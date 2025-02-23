import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

interface useFormReservationProps {
  onSubmit: () => void;
}

export const useFormReservation = ({ onSubmit }: useFormReservationProps) => {
  const { t } = useTranslation();
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  const Schema = Yup.object({
    hasMaterial: Yup.boolean(),
    materials: Yup.array().when("hasMaterial", {
      is: true,
      then: (schema) =>
        schema
          .min(1, t("Selecione ao menos 1 material!"))
          .required(t("global.validation.required")),
      otherwise: (schema) => schema.notRequired(),
    }),
    dateStart: Yup.string().required(t("global.validation.required")),
    dateEnd: Yup.string().required(t("global.validation.required")),
    purpose: Yup.string().required(t("global.validation.required")),
    startTime: Yup.string()
      .required(t("global.validation.required"))
      .matches(timeRegex, t("Horário inválido!")),
    endTime: Yup.string()
      .required(t("global.validation.required"))
      .matches(timeRegex, t("Horário inválido!")),
  });

  const initialValues = {
    hasMaterial: false,

    materials: [],
    dateStart: "",
    dateEnd: "",
    purpose: "",
    startTime: "",
    endTime: "",

    type: 0,
    userId: 0,
    status: 0
  };

  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  });
};
