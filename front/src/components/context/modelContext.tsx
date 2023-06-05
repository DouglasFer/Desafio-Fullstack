import { createContext, useContext, useState } from "react";
import { UserContext } from "./contextUser";

export const UseContextModal = createContext({});

export const UseProvider = ({ children }: any) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
  
    const { user } = useContext(UserContext);
  
    return (
      <UseContextModal.Provider
        value={{
          openModal,
          setOpenModal,
          user,
        }}
      >
        {children}
      </UseContextModal.Provider>
    );
  };
  