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
          .min(1, t("global.validation.minOneMaterial"))
          .required(t("global.validation.required")),
      otherwise: (schema) => schema.notRequired(),
    }),
    usageDate: Yup.string().required(t("global.validation.required")),
    usagePurpose: Yup.string().required(t("global.validation.required")),
    reservationSchedule: Yup.string()
      .required(t("global.validation.required"))
      .matches(timeRegex, t("global.validation.invalidTime")),
    devolutionSchedule: Yup.string()
      .required(t("global.validation.required"))
      .matches(timeRegex, t("global.validation.invalidTime")),
  });

  const initialValues = {
    hasMaterial: false,
    materials: [],
    usageDate: "",
    usagePurpose: "",
    reservationSchedule: "",
    devolutionSchedule: "",
  };

  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  });
};
