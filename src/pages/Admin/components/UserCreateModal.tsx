import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
  TextField,
  PasswordField,
  Button,
} from "@/components";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "sonner";
import { useFormRegister } from "../hooks/useForm";
import { useCreateUser } from "../hooks/useApi";
import { CheckboxField } from "@/components/ui/form/fields/CheckboxField";

export const UserCreateModal = ({
  setOpen,
  open,
  refresh
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  refresh: () => void
}) => {
  const createUser = useCreateUser();

  const form = useFormRegister({
    onSubmit: () => {
      createUser
        .makeRequest({
          ...form.values,
        })
        .then(() => {
          toast.success("Cadastro de usuário concluído!");
          refresh()
          setOpen(false);
        })
        .catch((err) => {
          if (err) {
            toast.error(err.response.data.message);
            return;
          }

          toast.error("Erro ao cadastrar usuário!");
        });
    },
  });

  useEffect(() => {
    if(!open) return
    form.resetForm()
  }, [open])

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar novo membro</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para cadastrar um novo usuário no sistema.
            Certifique-se de inserir informações corretas, incluindo nome
            completo, e-mail, e permissão de acesso.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit}
          className="flex flex-col sm:grid grid-cols-2 gap-10 w-full mt-10"
        >
          <TextField
            name="name"
            label="Nome"
            placeholder="Insira o nome completo"
            value={form.values.name}
            onChange={form.handleChange}
            errorMessage={form.errors.name}
            disabled={createUser.loading}
          />
          <TextField
            name="email"
            label="E-mail"
            placeholder="Insira o email"
            value={form.values.email}
            onChange={form.handleChange}
            errorMessage={form.errors.email}
            disabled={createUser.loading}
          />
          <PasswordField
            name="password"
            label="Senha"
            placeholder="Insira a senha"
            value={form.values.password}
            onChange={form.handleChange}
            errorMessage={form.errors.password}
            disabled={createUser.loading}
          />
          <CheckboxField
            label="Administrador"
            onCheckedChange={value => {
              if(!value) {
                form.setFieldValue('role', 'USER') 
                return
              }
              form.setFieldValue('role', 'ADM')
            }}
            disabled={createUser.loading}
          />
          <Button
            className="mt-6 col-span-2"
            type="submit"
            disabled={createUser.loading}
          >
            Cadastrar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
