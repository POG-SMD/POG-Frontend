import { Button, PasswordField, TextField } from "@/components";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <form className="flex flex-col gap-10 w-96 m-auto">
      <h1 className="text-3xl">LOGO</h1>
      <TextField
        name="email"
        label="E-mail"
        placeholder="Insira seu Email"
        // value={values.email}
        // onChange={value => setFieldValue('email', value)}
        // errorMessage={errors.email}
        // disabled={loading}
      />
      <PasswordField
        name="password"
        label="Senha"
        placeholder="Insira sua Senha"
        // value={values.password}
        // onChange={handleChange}
        // errorMessage={errors.password}
        // disabled={loading}
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
        // disabled={loading}
        // loading={loading}
      >
        Entrar
      </Button>
    </form>
  );
};
