import { VscCode } from "react-icons/vsc";
import { StyledHeader, StyledLogo, StyledSection } from "./style";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <VscCode className="logo" />
          <span>Lucas Maciel</span>
        </StyledLogo>
        <StyledSection>
          <a href="#section2" className="vidro">
            Projetos
          </a>
          <a href="#session3" className="vidro">
            Sobre mim
          </a>
          <a href="#session4" className="vidro">
            Contato
          </a>
        </StyledSection>
      </StyledHeader>
    </>
  );
};
