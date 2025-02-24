import { useEffect, useState } from "react";
import { Button } from "../../ui/Button";
import { CheckboxField } from "../../ui/form/fields/CheckboxField";
import { ComboboxField } from "../../ui/form/fields/ComboboxField";
import { DateField } from "../../ui/form/fields/DateField";
import { PatternField } from "../../ui/form/fields/PatternField";
import { TextareaField } from "../../ui/form/fields/TextAreaField";
import { OptionsList } from "../../ui/form/Select";
import { useFormReservation } from "./hook/useForm";
import { t } from "i18next";
import { toast } from "sonner";
import { cn } from "@/libs";
import { ReservationType } from "@/types/reservationType";
import { useAuth } from "@/contexts";
import { useCreateReservation } from "./hook/useApi";
import { useGetStatus } from "@/layouts/MainLayout/api/useApi";

export const ReservationForm = ({
  header,
  optionList,
  successMessage,
  className,
  type,
  hasMaterialDefault = false,
  refresh,
  date
}: {
  date?: string
  header: JSX.Element;
  optionList: OptionsList[];
  successMessage: string;
  className?: string;
  type: ReservationType;
  hasMaterialDefault?: boolean;
  refresh?: () => void;
}) => {
  const createReservation = useCreateReservation();
  const [hasMaterial, setHasMaterial] = useState<boolean>(hasMaterialDefault);
  const [materials, setMaterials] = useState<number[]>([]);
  const { user, setClose } = useAuth();
  const getStatus = useGetStatus();

  const form = useFormReservation({
    onSubmit: () => {
      if (hasMaterial && materials.length === 0)
        toast.error("Selecione ao menos 1 material!");

      if (!user) throw new Error("no user");

      createReservation
        .makeRequest({
          ...form.values,
          materialIds: materials.map(Number),
          type,
          userId: user.id,
        })
        .then(() => {
          toast.success(t(successMessage));
          setClose(false);
          refresh && refresh();
          getStatus.makeRequest({ id: user?.id });
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        })
        .finally(() => {
          form.resetForm();
          setMaterials([]);
        });
    },
  });

  useEffect(() => {
    if (date) {
      form.setFieldValue("dateStart", date);
    }
  }, [date]);

  return (
    <form
      onSubmit={form.handleSubmit}
      className={cn(
        "w-full mx-auto h-full lg:col-span-4 2xl:col-span-3 bg-secondary shadow-lg shadow-[#00000060] rounded-md py-3 px-6 overflow-auto",
        className
      )}
    >
      <header className="h-14 font-extrabold text-base_primary text-3xl mb-5 flex justify-center items-center rounded-md">
        {header}
      </header>

      <section className="flex flex-col gap-4">
        {!hasMaterialDefault && (
          <CheckboxField
            checked={hasMaterial}
            onCheckedChange={() => {
              setMaterials([]);
              setHasMaterial(!hasMaterial);
            }}
            label="Possui material"
            id="hasMaterial"
            disabled={createReservation.loading}
          />
        )}

        <ComboboxField
          options={optionList}
          label="Quais os materiais você precisa?"
          value=""
          onChange={(value) => {
            const selectedOption = optionList.find(
              (option) => option.value === value
            );

            if (!selectedOption) return;

            const alreadySelected = materials.some((materialId) => {
              const material = optionList.find(
                (opt) => Number(opt.value) === materialId
              );
              return material?.label === selectedOption.label;
            });

            if (!alreadySelected) {
              setMaterials((prev) => [...prev, Number(value)]);
            }
          }}
          disabled={!hasMaterial || createReservation.loading}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {materials
            .filter((material) =>
              optionList.some((option) => Number(option.value) === material)
            )
            .map((material) => {
              const selectedMaterial = optionList.find(
                (option) => Number(option.value) === material
              );
              return selectedMaterial ? (
                <span
                  key={material}
                  className="flex items-center gap-1 px-2 py-1 bg-base_primary-100 rounded-lg text-sm"
                >
                  {selectedMaterial.label}
                  <button
                    className="text-red-500 font-bold ml-1"
                    onClick={() =>
                      setMaterials((prev) => prev.filter((m) => m !== material))
                    }
                  >
                    ✕
                  </button>
                </span>
              ) : null;
            })}
        </div>

        <DateField
          label="Insira a data de uso:"
          errorMessage={form.errors.dateStart}
          onChange={form.handleChange}
          name="dateStart"
          disabled={createReservation.loading}
          value={form.values.dateStart}
        />
        {[ReservationType.EQUIPMENT].includes(type) && <DateField
          label="Insira a data de devolução:"
          errorMessage={form.errors.dateEnd}
          onChange={form.handleChange}
          name="dateEnd"
          disabled={createReservation.loading}
          value={form.values.dateEnd}
        />}

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
              form.setFieldValue("startTime", finalValue);
            }}
            errorMessage={form.errors.startTime}
            name="startTime"
            disabled={createReservation.loading}
            value={form.values.startTime}
          />
          <PatternField
            onChange={(value) => {
              const formattedValue = value.replace(/\D/g, "");
              const finalValue =
                formattedValue.slice(0, 2) +
                (formattedValue.length > 2 ? ":" : "") +
                formattedValue.slice(2, 4);
              form.setFieldValue("endTime", finalValue);
            }}
            format="##:##"
            mask=""
            label="Horário de devolução:"
            placeholder="00:00"
            errorMessage={form.errors.endTime}
            name="endTime"
            disabled={createReservation.loading}
            value={form.values.endTime}
          />
        </fieldset>

        <TextareaField
          placeholder="Insira seu motivo de uso..."
          label="Motivo para uso:"
          errorMessage={form.errors.purpose}
          onChange={form.handleChange}
          name="purpose"
          disabled={createReservation.loading}
          value={form.values.purpose}
        />

        <Button
          type="submit"
          disabled={createReservation.loading}
          className="px-10 py-6 w-fit mx-auto mt-24 bg-base_secondary"
        >
          Solicitar Reserva
        </Button>
      </section>
    </form>
  );
};
