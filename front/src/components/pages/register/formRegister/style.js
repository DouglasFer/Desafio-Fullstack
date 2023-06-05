import styled from "styled-components";

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 380px;
  border: 1px solid var(--gray-3);
  box-sizing: border-box;
  padding: 15px;
  border-radius: 8px;
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: var(--gray-4);
    }
    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: var(--gray-4);
      text-decoration: underline;
    }
  }
  input {
    border: 2px solid var(--gray-3);
    border-radius: 8px;
    height: 45px;
    padding: 10px;
    outline: none;
  }
  label {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-1);
    margin-bottom: -30px;
    z-index: 1;
    margin-left: 10px;
    
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-negative);
  }
  button {
    border: 1px solid var(--gray-3);
    border-radius: 8px;
    background-color: var(--gray-4);
    height: 45px;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--gray-2);

    &:hover {
      opacity: 0.7;
    }
  }
`;
