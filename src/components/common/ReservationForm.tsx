import { CheckboxField } from "../ui/form/fields/CheckboxField";
import { ComboboxField } from "../ui/form/fields/ComboboxField";
import { OptionsList } from "../ui/form/Select";

export const ReservationForm = ({
  header,
  optionList,
}: {
  header: JSX.Element;
  optionList: OptionsList[];
}) => {
  return (
    <form className="w-1/4 bg-secondary border-2 rounded-md p-8 border-primary h-5/6">
      <header>{header}</header>

        <section className="flex flex-col gap-4">
          <CheckboxField
            label="Possui material"
            id="hasMaterial"
          />

          <ComboboxField
            options={optionList}
            label="Quais os materiais você precisa?"
            value={""}
            onChange={() => {}}
          />
        </section>
    </form>
  );
};
