import {
  ContainerModal,
  ContentForm,
  ContentModal,
  HeaderModal,
} from "./style";
import { api } from "../../../../services/api";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { getTokenFromLocalStorage, getidUserLocalStorage } from "../../../../localStorage/localStorage";
import { registerContactSchema } from "../../register/formRegister/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";


interface iRegisterContact{
  email: string,
  fullName: string,
  phone: string
}

export const RegisterContact = ({ setOpenModal }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterContact>({
    mode: "onBlur",
    resolver: yupResolver(registerContactSchema),
  });

  const createContact = async (dataContact: iRegisterContact) => {
    const tokenUser = getTokenFromLocalStorage();
    const clientId = getidUserLocalStorage()
    
    const response = await api.post(`contacts/${clientId}`, dataContact, { headers: {
      'Authorization': `Bearer ${tokenUser}`,
      'Content-Type': 'application/json'
    }});
    if (response.status === 201) {
      toast.success("Contato criado com sucesso!");

      setOpenModal(false);
    }
  };


  const onSubmit: SubmitHandler<iRegisterContact> = (data) => {
    createContact(data);
    reset({
      fullName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <ContainerModal>
      <ContentModal>
        <HeaderModal>
          <div>
            <p>Cadastrar Contato</p>
            <button onClick={() => setOpenModal(false)}>
              x
            </button>
          </div>
        </HeaderModal>
        <ContentForm onSubmit={handleSubmit(onSubmit)}>
          <label>Nome do Contato</label>
          <input
            type="text"
            placeholder="Informe o nome do Contato"
            {...register("fullName")}
          />
           {errors.fullName?.message && <p>{errors.fullName.message}</p>}
           
          <label>Email do Contato</label>
          <input
            type="text"
            placeholder="Informe o email do Contato"
            {...register("email")}
          />
           {errors.email?.message && <p>{errors.email.message}</p>}

          <label>Telefone do Contato</label>
          <input
            type="text"
            placeholder="Informe o telefone do Contato"
            {...register("phone")}
          />
           {errors.phone?.message && <p>{errors.phone.message}</p>}

          <button type="submit">Cadastrar Contato</button>
        </ContentForm>
      </ContentModal>
    </ContainerModal>
  );
};
