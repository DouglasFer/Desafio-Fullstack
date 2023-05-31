import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo 3 caracteres.")
    .max(200, "O nome pode ter no máximo 200 caracteres."),
  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("É necessário fornecer um email."),
  password: yup
    .string()
    .required("A senha é obrigatória!")
    .min(8, "É necessário uma senha de pelos 8 Caracteres"),
  phone: yup
    .string()
    .min(10)
    .required("Digite seu telefone no formato '+55xxxxx-xxxx'"),
});
