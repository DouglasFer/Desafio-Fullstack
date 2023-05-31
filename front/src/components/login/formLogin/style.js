import styled from "styled-components";

export const FormLogin = styled.form`
  width: 90%;
  max-width: 424px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border: 1px solid var(--gray-3);
  box-sizing: border-box;
  padding: 10px;

  h6 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-1);
  }

  label {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-2);
    margin-bottom: -17px;
    position: inherit;
    z-index: 1;
    width: 35px;
    background-color: var(--gray-4);
    margin-left: 12px;
  }

  input {
    height: 40px;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    padding: 10px;
    color: var(--gray-2);
  }

  button {
    height: 40px;
    background-color: var(--color-primary);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--gray-4);
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--gray-2);
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: var(--gray-4);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--gray-2);
  }

  a:hover,
  button:hover {
    opacity: 0.7;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-negative);
  }
`;
