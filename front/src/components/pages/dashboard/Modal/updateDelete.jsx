import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getTokenFromLocalStorage } from "../../../../localStorage/localStorage";
import { api } from "../../../../services/api";

import {
  ContainerModal,
  ContentForm,
  ContentModal,
  HeaderModal,
} from "./style";
import { useState } from "react";

export const Update = ({ contact, id, setUpdateOn }) => {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit } = useForm({});
  const [fullName, setFullName] = useState(contact.fullName);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const updateContact = async (data) => {
    const tokenUser = getTokenFromLocalStorage();
   

    const response = await api.patch(`contacts/${id}`, data, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    });
    
    if (response.status === 200) {
      toast.success("Contato Atualizado");

      setUpdateOn(false);
    }
  };
  const deleteContact = async () => {
    const tokenUser = getTokenFromLocalStorage();
    const response = await api.delete(`contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    });
    if (response.status === 204) {
      toast.success("Contato Deletado");

      setUpdateOn(false);
    }
  };
  const onSubmit = (data) => {
    data = {
      fullName,
      email,
      phone
    }
    updateContact(data);
  };

  return (
    <ContainerModal>
      <ContentModal>
        <HeaderModal>
          <div>
            <p>Detalhes do Contato</p>
            <button onClick={() => setUpdateOn(false)}>
              x
            </button>
          </div>
        </HeaderModal>
        <ContentForm onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
          <input
            type="text"
            placeholder={contact.fullName}
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder={contact.email}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Telefone</label>
          <input
            type="text"
            placeholder={contact.phone}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />

          <button type="submit">Atualizar Contato</button>
          <button type="button" onClick={deleteContact}>
            Deletar
          </button>
        </ContentForm>
      </ContentModal>
    </ContainerModal>
  );
};
