import { Link } from "react-router-dom";
import { ContainerDashboard, ContentMain, HeaderAlign, HeaderConntent, Profile, TechBtn, UlCard } from "./style";
import { clearLocal } from "../../../localStorage/clearLocal";
import {  useEffect, useState } from "react";
import { getTokenFromLocalStorage, getidUserLocalStorage } from "../../../localStorage/localStorage";
import { api } from "../../../services/api";
import { NameClient } from "./nameClient";
import { RegisterContact } from "./Modal";
import { CardContact } from "./cardContact";
import jwtDecode from "jwt-decode";



export const Dashboard = () => {
    
    const [contacts, setContact] = useState([]);
    const [openModal, setOpenModal] = useState<boolean>(false); 
    const decoded: string | any = jwtDecode(getTokenFromLocalStorage())
    
    useEffect(() => {
          const getContacts = async () => {
          const tokenClient = getTokenFromLocalStorage();

          const clientId = getidUserLocalStorage();
          const response = await api.get(
            `contacts/${clientId}`,
            
            {
              headers: {
                Authorization: `Bearer ${tokenClient}`,
              },
            }
            );
            
          if (response.status === 200) {
            setContact(response.data);
          }
        };
        getContacts();
      }, [contacts]);
      
      
    return (
        <ContainerDashboard>
          <HeaderConntent>
            <HeaderAlign>
              <h1>Desafio Full Stack</h1>
              <button>
                <Link to="/" onClick={() => clearLocal()}>
                  Sair
                </Link>
              </button>
            </HeaderAlign>
          </HeaderConntent>
          <Profile>
            <NameClient decoded={decoded.username} />;
          </Profile>
          <ContentMain>
            <TechBtn>
              <p>Contatos</p>
              <button type="button" onClick={() => setOpenModal(true)}>
                +
              </button>
            </TechBtn>
            {openModal ? <RegisterContact setOpenModal={setOpenModal} /> : false}
            <UlCard>
              {contacts.length !== 0
                ? contacts.map((contact: any) => { 
                    return (
                      <CardContact
                         key={contact.id}
                         contacts={contact}
                      />
                   ); 
                  })
                 : false} 
            </UlCard>
          </ContentMain>
        </ContainerDashboard>
      );
    };