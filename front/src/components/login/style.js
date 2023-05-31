import styled from "styled-components";

export const ContentAside = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 580px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const AsideForm = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivShopping = styled.div`
  display: flex;
  border: 1px solid var(--gray-3);
  align-items: center;
  justify-content: center;
  height: 100px;
  max-width: 430px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  span {
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    width: 80%;
    max-width: 350px;
  }
`;
