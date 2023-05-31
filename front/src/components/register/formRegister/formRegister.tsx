import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledFormRegister } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./formSchema";
import { UserContext } from "../../context/contextUser";

export interface iRegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}
export const FormRegister = () => {
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    console.log(data)

    userRegister(data, setLoading);
    reset({
      fullName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <div>
        <p>Cadastro</p>
        <Link to="/">Retornar para o login</Link>
      </div>

      <label>Nome</label>
      <input
        type="text"
        placeholder="Digite seu nome"
        {...register("fullName")}
        disabled={loading}
      />
      {errors.fullName?.message && <p>{errors.fullName.message}</p>}

      <label>Email</label>
      <input
        type="email"
        placeholder="Digite seu email"
        {...register("email")}
        disabled={loading}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <label>Telefone</label>
      <input
        type="text"
        placeholder="Digite seu telefone no formato '+55xxxxx-xxxx'"
        {...register("phone")}
        disabled={loading}
      />
      {errors.phone?.message && <p>{errors.phone.message}</p>}

      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
        disabled={loading}
      />
      {errors.password?.message && (
        <p>{errors.password.message}</p>
      )}
      <button type="submit">Cadastrar</button>
    </StyledFormRegister>
  );
};
