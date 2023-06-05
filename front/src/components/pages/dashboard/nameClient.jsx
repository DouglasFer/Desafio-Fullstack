import { ProfileContent } from "./style";

export const NameClient = ({ decoded }) => {
  
  return (
    <ProfileContent>
      <p>Olá, {decoded} </p>
    </ProfileContent>
  );
};
