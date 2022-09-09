import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0 auto;

  width: 90vw;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const StyledLogo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    font-size: 35px;
    color: var(--cor-roxo);
    margin-bottom: 10px;
  }

  span {
    font-family: "Bebas Neue", cursive;
    font-size: 2rem;
  }

  @media (max-width: 720px) {
    span {
      font-size: 1.3rem;
    }
  }
`;

export const StyledSection = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 60px;

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: "Bebas Neue", cursive;
    color: white;
    font-size: 1.3rem;
    padding: 3px 10px;
  }

  .vidro:hover {
    background-color: white;
    backdrop-filter: blur(1px);
    border-radius: 10px;
    transition: 1s;
    color: black;
  }
  @media (max-width: 720px) {
    gap: 10px;
    button {
      font-size: 0.7rem;
    }
  }
`;
