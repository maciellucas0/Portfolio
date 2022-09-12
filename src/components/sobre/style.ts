import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
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

  #verProjetos {
    width: 150px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background: white;
    font-family: "Bebas Neue", cursive;
    font-weight: 600;
    font-size: 1.3rem;
    position: absolute;
    bottom: 3%;
    margin-left: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  @media (max-width: 450px) {
    #verProjetos {
      display: none;
    }
  }
  #verProjetos:hover {
    background-color: black;
    backdrop-filter: blur(1px);
    border-radius: 10px;
    transition: 1s;
    color: white;
  }
  @media (max-width: 720px) {
    margin-top: 1rem;
    img {
      width: 200px;
      height: 200px;
    }

    .dial {
      position: absolute;
      bottom: 0.5%;
      right: 5%;
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
  gap: 2rem;
  margin-left: 5%;

  a {
    font-family: "Alumni Sans Pinstripe";
    font-weight: 600;
    text-decoration: none;
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    margin: 0 auto;

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;
