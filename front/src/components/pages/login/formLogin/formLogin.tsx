import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/contextUser"; 
import { loginSchema } from "./loginSchema";
import { FormLogin } from "./style";

export interface iLoginFormValues {
  email: string;
  password: string;
}

export const Form = () => {
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(loginSchema),
  });
  

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data, setLoading);
  };
  return (
    <FormLogin onSubmit={handleSubmit(submit)}>
      <h6>Login</h6>

      <label>Email</label>
      <input
        type="email"
        placeholder="Digite seu email"
        {...register("email")}
        disabled={loading}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
        disabled={loading}
      />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <button type="submit">Logar</button>
      <span>
        Crie sua conta para visualizar seus futuros contatos!
      </span>
      <Link to="/register">Cadastrar</Link>
    </FormLogin>
  );
};
