import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100%;
  background-color: var(--gray-1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderConntent = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray-2);
`;

export const HeaderAlign = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gray-4);
  a {
    width: 55px;
    height: 32px;
    background-color: var(--gray-2);
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    color: var(--gray-4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Profile = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray-2);
`;
export const ProfileContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--gray-4);
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray-4);
  }
`;

export const ContentMain = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 30px;
`;

export const TechBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: var(--gray-4);
  }
  button {
    width: 32px;
    height: 32px;
    background-color: var(--gray-2);
    border-radius: 4px;
    color: var(--gray-4);
    font-weight: 700;
    font-size: 22px;
  }
`;

export const UlCard = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--gray-2);
  padding: 30px;

`;

export const LiCard = styled.li`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--gray-1);
  border-radius: 4px;
  animation: myAnim 1s ease 0s 1 normal forwards;
  cursor: pointer;

  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    color: var(--gray-4);
  }
  :hover {
      opacity: 0.8;
    }
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: rotateY(-100deg);
      transform-origin: right;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      transform: rotateY(0);
      transform-origin: right;
    }
  }

`;

export const ContentLi = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--gray-4);


  }

`;

export const DivNoTech = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    color: var(--gray-4);
    font-size: 40px;
  }
`;
