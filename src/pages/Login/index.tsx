import { Button, PasswordField, TextField } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { useFormSignIn } from "./hooks/useForm";
import { useAuth } from "@/contexts";
import { useSignIn } from "./hooks/useApi";
import { toast } from "sonner";
import { t } from "i18next";

export const Login = () => {
  
  const { setToken } = useAuth()
  const signIn = useSignIn()
  const navigate = useNavigate()

  const form = useFormSignIn({
    onSubmit: () => {
      signIn
        .makeRequest({
          login: form.values.email,
          ...form.values,
        })
        .then(res => {
          const responseData = res.data.data
          setToken(responseData.token)
          navigate('/users')
          toast.success(t('signIn.toast.success'))
        })
        .catch(() => {
          toast.error(t('signIn.toast.error'))
        })
    },
  })
  


  return (
    <form onSubmit={form.handleSubmit} className="flex flex-col gap-10 w-96 m-auto">
      <h1 className="text-3xl">LOGO</h1>
      <TextField
        name="email"
        label="E-mail"
        placeholder="Insira seu Email"
        value={form.values.email}
        onChange={form.handleChange}
        errorMessage={form.errors.email}
        disabled={signIn.loading}
      />
      <PasswordField
        name="password"
        label="Senha"
        placeholder="Insira sua Senha"
        value={form.values.password}
        onChange={form.handleChange}
        errorMessage={form.errors.password}
        disabled={signIn.loading}
      />
      <Link
        to="/send-email"
        className="text-primary text-end -mt-2 font-normal text-sm hover:underline hover:underline-offset-3 hover:cursor-pointer"
      >
        Esqueci a senha
      </Link>
      <Button
        className="mt-6"
        type="submit"
        disabled={signIn.loading}
        onClick={() => {
          console.log(form.values);
          console.log(form.errors);
          
        }}
      >
        Entrar
      </Button>
    </form>
  );
};
