import { ContentAside } from "../login/style";
import { FormRegister } from "./formRegister/formRegister";
import { Container } from "./style";

export const RegisterPage = () => {
  return (
    <Container>
      <ContentAside>
        <FormRegister />
      </ContentAside>
    </Container>
  );
};
