import { useState } from "react";
import { Button } from "../ui/Button";
import { CheckboxField } from "../ui/form/fields/CheckboxField";
import { ComboboxField } from "../ui/form/fields/ComboboxField";
import { DateField } from "../ui/form/fields/DateField";
import { PatternField } from "../ui/form/fields/PatternField";
import { TextareaField } from "../ui/form/fields/TextAreaField";
import { OptionsList } from "../ui/form/Select";

export const ReservationForm = ({
  header,
  optionList,
}: {
  header: JSX.Element;
  optionList: OptionsList[];
}) => {
  const [hasMaterial, setHasMaterial] = useState<boolean>(false);

  return (
    <form className="w-1/4 bg-secondary border-2 rounded-md py-5 px-6 border-primary min-h-[90vh] overflow-auto">
      <header className="h-16 bg-slate-100 mb-5 flex justify-center items-center rounded-md">
        {header}
      </header>

      <section className="flex flex-col gap-4">
        <CheckboxField
          checked={hasMaterial}
          onCheckedChange={() => setHasMaterial(!hasMaterial)}
          label="Possui material"
          id="hasMaterial"
        />

        <ComboboxField
          options={optionList}
          label="Quais os materiais você precisa?"
          value={""}
          onChange={() => {}}
          disabled={!hasMaterial}
        />

        <DateField label="Insira a data de uso:" />

        <fieldset className="flex gap-4 items-center">
          <PatternField
            onChange={() => {}}
            format="##:##"
            mask=""
            label="Horário de reserva:"
            placeholder="00:00"
          />
          <PatternField
            onChange={() => {}}
            format="##:##"
            mask=""
            label="Horário de devolução:"
            placeholder="00:00"
          />
        </fieldset>

        <TextareaField label="Motivo para uso:" />

        <Button className="px-10 py-6 w-fit mx-auto">Solicitar Reserva</Button>
      </section>
    </form>
  );
};
