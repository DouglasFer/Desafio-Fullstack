import { Container } from "../register/style";
import { Form } from "./formLogin/formLogin";
import { ContentAside } from "./style";

export const LoginPage = () => {
  return (
    <Container>
      <ContentAside>
        <Form />
      </ContentAside>
    </Container>
  );
};
