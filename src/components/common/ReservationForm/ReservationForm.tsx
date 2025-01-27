import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../ui/Button";
import { CheckboxField } from "../../ui/form/fields/CheckboxField";
import { ComboboxField } from "../../ui/form/fields/ComboboxField";
import { DateField } from "../../ui/form/fields/DateField";
import { PatternField } from "../../ui/form/fields/PatternField";
import { TextareaField } from "../../ui/form/fields/TextAreaField";
import { OptionsList } from "../../ui/form/Select";
import { useFormReservation } from "./hook/useForm";
import { useReservationResponseProps } from "./hook/useApi";
import { t } from "i18next";
import { toast } from "sonner";

export const ReservationForm = ({
  header,
  optionList,
  setState,
  successMessage,
  errorMessage,
  loading,
}: {
  header: JSX.Element;
  optionList: OptionsList[];
  setState: Dispatch<SetStateAction<useReservationResponseProps>>;
  successMessage: string
  errorMessage: string
  loading: boolean
}) => {
  const [hasMaterial, setHasMaterial] = useState<boolean>(false);
  const [materials, setMaterials] = useState<string[]>([]);

  const form = useFormReservation({
    onSubmit: () => {
      try {
        if(hasMaterial && materials.length === 0) throw new Error('no materials')
        
        setState({ ...form.values, hasMaterial, materials });
        if(!loading) toast.success(t(successMessage));
      } catch (e: any) {
        if(e.message == 'no materials') {
          toast.error('Selecione no mínimo um material para continuar')
          return
        }
        toast.error(t(errorMessage));
      }
    },
  });

  console.log(form.values.devolutionSchedule);
  console.log(form.values);
  return (
    <form
      onSubmit={form.handleSubmit}
      className="sm:min-w-[400px] w-full sm:w-1/4 bg-secondary border-2 rounded-md py-5 px-6 border-primary max-h-[90vh] overflow-auto"
    >
      <header className="h-16 bg-slate-100 mb-5 flex justify-center items-center rounded-md">
        {header}
      </header>

      <section className="flex flex-col gap-4">
        <CheckboxField
          checked={hasMaterial}
          onCheckedChange={() => setHasMaterial(!hasMaterial)}
          label="Possui material"
          id="hasMaterial"
          disabled={loading}
        />

        <ComboboxField
          options={optionList}
          label="Quais os materiais você precisa?"
          value=""
          onChange={(value) => setMaterials((prev) => [...prev, value])}
          disabled={!hasMaterial || loading}
        />

        <DateField
          label="Insira a data de uso:"
          errorMessage={form.errors.usageDate}
          onChange={form.handleChange}
          name="usageDate"
          disabled={loading}
        />

        <fieldset className="flex flex-col sm:flex-row gap-4 items-center">
          <PatternField
            format="##:##"
            mask=""
            label="Horário de reserva:"
            placeholder="00:00"
            onChange={(value) => {
              const formattedValue = value.replace(/\D/g, "");
              const finalValue =
                formattedValue.slice(0, 2) +
                (formattedValue.length > 2 ? ":" : "") +
                formattedValue.slice(2, 4);
              form.setFieldValue("reservationSchedule", finalValue);
            }}
            errorMessage={form.errors.reservationSchedule}
            name="reservationSchedule"
          disabled={loading}
          />
          <PatternField
            onChange={(value) => {
              const formattedValue = value.replace(/\D/g, "");
              const finalValue =
                formattedValue.slice(0, 2) +
                (formattedValue.length > 2 ? ":" : "") +
                formattedValue.slice(2, 4);
              form.setFieldValue("devolutionSchedule", finalValue);
            }}
            format="##:##"
            mask=""
            label="Horário de devolução:"
            placeholder="00:00"
            errorMessage={form.errors.devolutionSchedule}
            name="devolutionSchedule"
          disabled={loading}
          />
        </fieldset>

        <TextareaField
          placeholder="Insira seu motivo de uso..."
          label="Motivo para uso:"
          errorMessage={form.errors.usagePurpose}
          onChange={form.handleChange}
          name="usagePurpose"
          disabled={loading}
        />

        <Button type="submit" disabled={loading} className="px-10 py-6 w-fit mx-auto">
          Solicitar Reserva
        </Button>
      </section>
    </form>
  );
};
