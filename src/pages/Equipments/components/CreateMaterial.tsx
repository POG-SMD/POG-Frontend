import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
  TextField,
  Button,
  SelectField,
} from "@/components";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "sonner";
import { useCreateMaterial } from "../hooks/useApi";
import { useFormMaterial } from "../hooks/useForm";
import { TextareaField } from "@/components/ui/form/fields/TextAreaField";
import { getMaterialOptions } from "@/types/materialType";

export const MaterialCreateModal = ({
  setOpen,
  open,
  refresh,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  refresh: () => void;
}) => {
  const createMaterial = useCreateMaterial();

  const form = useFormMaterial({
    onSubmit: () => {
      createMaterial
        .makeRequest({
          ...form.values,
        })
        .then(() => {
          toast.success("Cadastro de material concluído!");
          refresh();
          setOpen(false);
        })
        .catch((err) => {
          if (err) {
            toast.error(err.response.data.message);
            return;
          }

          toast.error("Erro ao cadastrar material!");
        });
    },
  });

  useEffect(() => {
    if (!open) return;
    form.resetForm();
  }, [open]);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar novo material</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para cadastrar um novo material no
            sistema. Certifique-se de inserir informações corretas, incluindo
            nome, tipo, quantidade disponível e descrição.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit}
          className="flex flex-col sm:grid grid-cols-2 gap-10 w-full mt-10"
        >
          <TextField
            name="title"
            label="Nome:"
            placeholder="Insira o nome do material"
            value={form.values.title}
            onChange={form.handleChange}
            errorMessage={form.errors.title}
            disabled={createMaterial.loading}
          />
          <TextField
            type="number"
            name="quantity"
            label="Quantidade disponível:"
            placeholder="Insira a quantidade disponível"
            value={form.values.quantity === 0 ? '' : form.values.quantity}
            onChange={value => form.setFieldValue('quantity', Number(value.target.value))}
            errorMessage={form.errors.quantity}
            disabled={createMaterial.loading}
          />
          <TextareaField
            name="description"
            label="Descrição:"
            placeholder="Insira sua descrição..."
            value={form.values.description}
            onChange={form.handleChange}
            errorMessage={form.errors.description}
            disabled={createMaterial.loading}
          />
          <SelectField
            options={getMaterialOptions() || []}
            onChange={value => form.setFieldValue('type', Number(value))}
            name="type"
            label="Tipo:"
            placeholder="Selecione"
            errorMessage={form.errors.type}
            disabled={createMaterial.loading}
            value={form.values.type}
          />
          <Button
            className="mt-6 col-span-2"
            type="submit"
            disabled={createMaterial.loading}
          >
            Criar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
