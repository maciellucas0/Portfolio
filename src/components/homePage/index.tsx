import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  FcAbout,
  FcDownload,
  FcFinePrint,
  FcCallback,
  FcFlashOn,
  FcApproval,
  FcBinoculars,
} from "react-icons/fc";
import semFundo from "../../assets/media.png";
import {
  StyledContainer,
  StyledDivGit,
  StyledDivImg,
  StyledMain,
  StyledModal,
} from "./style";
import { RiCloseCircleFill } from "react-icons/ri";

export default function Sobre() {
  const [modalTecnologias, setModalTecnologias] = useState(false);
  const [modalCurriculo, setModalCurriculo] = useState(false);

  function tecnologiasUsadas() {
    setModalTecnologias(!modalTecnologias);
  }
  function dowloadCurriculo() {
    setModalCurriculo(!modalCurriculo);
  }
  function daquiUmTempo() {
    console.log("como me vejo daqui um tempo");
  }
  function entreEmContato() {
    console.log("entre em contato");
  }
  const actions = [
    {
      icon: <FcAbout size={30} />,
      name: "Tecnologias usadas nesse site.",
      function: tecnologiasUsadas,
    },
    {
      icon: <FcDownload size={30} />,
      name: "Download currículo.",
      function: dowloadCurriculo,
    },
    {
      icon: <FcFinePrint size={30} />,
      name: "Como me vejo daqui um tempo...",
      function: daquiUmTempo,
    },
    {
      icon: <FcCallback size={30} />,
      name: "Entre em contato.",
      function: entreEmContato,
    },
  ];
  return (
    <>
      <section id="session1">
        <StyledMain>
          <div className="sessao">
            <p>
              HI THERE<span>{<FcFlashOn size={30} />}</span> I`M
            </p>
            <h2>Lucas Maciel</h2>
            <p>Este é meu portfólio, seja bem vindo!</p>
          </div>
          <StyledContainer>
            <div className="ContainerMedio">
              <p>
                Tenho 20 anos , moro em{" "}
                <span className="color">Jundiaí-SP</span> e adoro programar.
                Atualmente estudo na{" "}
                <span className="colorBlue">Kenzie Academy Brasil</span> para me
                tornar um desenvolvedor FullStak!. Terminei o módulo Front-End e
                agora estou partindo para o mundo back ,{" "}
                <span className="color">
                  espero poder compartilhar o que eu sei
                </span>{" "}
                através desse portfólio. mas garanto que tem muito mais em .
                <FcApproval />
              </p>
            </div>
            <StyledDivImg>
              <img src={semFundo} alt="Foto Perfil" />
            </StyledDivImg>
          </StyledContainer>
          <Box
            className="dial"
            sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
          >
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              icon={<SpeedDialIcon />}
              direction={"left"}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.function}
                />
              ))}
            </SpeedDial>
          </Box>
          <StyledDivGit>
            <a href="https://github.com/maciellucas0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJ661_VwO4iG6mzSlGKrrM3SD7L8iPCl7Zg&usqp=CAU"
                alt=""
              />{" "}
              Github
            </a>

            <a href="https://www.linkedin.com/in/lucas-maciel-31293a198/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                alt="linkedin"
              />{" "}
              Linkedin
            </a>
          </StyledDivGit>
          <a href="#section2" id="verProjetos">
            Ver Projetos..
            <FcBinoculars size={30} />
          </a>
        </StyledMain>
        {modalTecnologias ? (
          <StyledModal>
            <div>
              <h1>Tecnologias usadas nesse portfólio</h1>
              <ul>
                <li>
                  -HTML{" "}
                  <img
                    src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"
                    alt="HTML"
                  />
                </li>
                <li>
                  -Styled-components{" "}
                  <img
                    src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4"
                    alt="Styled-components"
                  />
                </li>
                <li>
                  -React-RouterDom{" "}
                  <img
                    src="https://scriptverse.academy/img/tutorials/react-router.png"
                    alt="React-RouterDom"
                  />
                </li>
                <li>
                  -TypeScript{" "}
                  <img
                    src="https://miro.medium.com/max/1400/0*RKICUYO863Mu_2mX.png"
                    alt="TypeScript"
                  />
                </li>
                <li>
                  -React{" "}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="React"
                  />
                </li>
                <li>
                  -Material-Ui{" "}
                  <img
                    src="https://mui.com/static/logo.png"
                    alt="Material-Ui"
                  />
                </li>
              </ul>
              <button onClick={() => setModalTecnologias(!modalTecnologias)}>
                <RiCloseCircleFill className="closeButton" />
              </button>
            </div>
          </StyledModal>
        ) : (
          <></>
        )}

        {modalCurriculo ? (
          <div>
            <StyledModal>
              <div>
                <h1>Gostaria de baixar meu currículo?</h1>
                <a href="Curriculo-Lucas-Maciel.pdf" download>
                  Clique aqui
                </a>
                <button onClick={() => setModalCurriculo(!modalCurriculo)}>
                  <RiCloseCircleFill className="closeButton" />
                </button>
              </div>
            </StyledModal>
          </div>
        ) : (
          <></>
        )}
      </section>
      <section id="section2"></section>
    </>
  );
}
