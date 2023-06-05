import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ContentModal = styled.div`
  width: 90%;
  max-width: 369px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-1);
  gap: 30px;
  border-radius: 4px;
  animation: animationModal 1s ease 0s 1 normal forwards;
`;

export const HeaderModal = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-1);
  border-radius: 4px 4px 0 0;
  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--gray-4);
      font-size: 18px;
    }
    button {
      font-size: 16px;
      color: var(--gray-4);
    }
  }
`;

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 30px;
  gap: 10px;

  label {
    font-weight: 400;
    font-size: 13px;
    color: var(--gray-4);
  }
  input,
  select {
    height: 48px;
    border: 1px solid var(--gray-4);
    border-radius: 4px;
    background-color: var(--gra-3);
    color: var(--gray-4);
    padding-left: 10px;
  }

  button {
    background-color: var(--gray-4);
    height: 48px;
    border: 1px solid var(--gray-4);
    border-radius: 4px;
    margin-top: 20px;
    color: var(--gray-5);
    font-weight: 700;
    font-size: 16px;
    :hover {
      opacity: 0.8;
    }
  }
`;
