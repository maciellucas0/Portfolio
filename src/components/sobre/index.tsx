import * as React from "react";
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
} from "react-icons/fc";
import semFundo from "../../assets/media.png";
import {
  StyledContainer,
  StyledDivGit,
  StyledDivImg,
  StyledMain,
} from "./style";

function tecnologiasUsadas() {
  console.log("tecnologia usada");
}
function dowloadCurriculo() {
  console.log("dowload curriculo");
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

export default function Sobre() {
  return (
    <>
      <StyledMain>
        <section>
          <p>
            HI THERE<span>{<FcFlashOn size={30} />}</span> I`M
          </p>
          <h2>Lucas Maciel</h2>
          <p>Este é meu portfólio, seja bem vindo!</p>
        </section>
        <StyledContainer>
          <div className="ContainerMedio">
            <p>
              Tenho 20 anos , moro em <span className="color">Jundiaí-SP</span>{" "}
              e adoro programar. Atualmente estudo na{" "}
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
          <a href="https://github.com/maciellucas0">Github</a>

          <a href="https://www.linkedin.com/in/lucas-maciel-31293a198/">
            Linkedin
          </a>
        </StyledDivGit>
      </StyledMain>
    </>
  );
}
