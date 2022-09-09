import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 0 auto;
  }
  section {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  section h2 {
    font-family: "Bebas Neue", cursive;
    font-size: 3rem;
  }

  section p {
    font-family: "Alumni Sans Pinstripe";
    font-size: 2rem;
  }

  .dial {
    position: absolute;
    bottom: 3%;
    right: 5%;
  }

  @media (max-width: 720px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const StyledContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .ContainerMedio {
    p {
      font-family: "Alumni Sans Pinstripe";
      font-size: 1.4rem;
      width: 80%;
      text-align: justify;
      margin: 1.5rem auto;

      .colorBlue {
        color: blue;
        font-weight: 600;
      }

      .color {
        color: yellow;
        font-weight: 600;
      }
    }
  }

  @media (min-width: 720px) {
    flex-direction: row-reverse;
    width: 80%;
    margin: 0 auto;
    .ContainerMedio p {
      font-size: 2rem;
    }
  }
`;

export const StyledDivImg = styled.div`
  height: 300px;
  width: 500px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  background: linear-gradient(#2f003f, #ff8006, #f3c75f, #e9cfaa);
  box-shadow: 10px 10px 31px -3px #e9cfaa;
  @media (max-width: 720px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledDivGit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
`;
