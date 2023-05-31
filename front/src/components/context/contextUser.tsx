import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { api } from "../../services/api";
import { iProviderProps, iRequestError } from "./@types";
import { iRegisterFormValues } from "../register/formRegister/formRegister";
import { createContext, useState } from "react";
import { iLoginFormValues } from "../login/formLogin/formLogin"
import "react-toastify/dist/ReactToastify.css";

export interface iRegisterResponse {
  message: string;
}

interface iUser {
  id: string;
  name: string;
  email: string;
}
interface iLoginResponse {
  user: iUser;
  accessToken: string;
}

export interface iUserContext {
  user: iUser | null;
  loading: boolean;
  userLogin: (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userRegister: (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogout: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const userRegister = async (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    console.log(formData)
    try {
      setLoading(true);
      const response = await api.post<iRegisterResponse>("clients", formData);
      console.log(response.data)
      console.log(formData)
      toast.success(response.data.message);

      if (response.status === 201) {
        toast.success("Cadastro Realizado!");
        navigate("/");
      } else {
        toast.error("Algo deu errado, verifique os campos!");
      }
      return response.data;
    } catch (error) {
      toast.error("usuario já cadastrado");
    } finally {
      setLoading(false);
    }
  };
  const userLogin = async (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<iLoginResponse>("login", formData);

      if (response.status === 200) {
        localStorage.setItem("@TOKEN", response.data.accessToken);
        toast.success("Login Efetuado!");

        setUser(response.data.user);
        const toNavigate = location.state?.from?.pathname || "/dashboard";

        navigate(toNavigate, { replace: true });
      } else {
        toast.error("Algo deu errado!");
      }
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };
  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, userRegister, userLogin, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
