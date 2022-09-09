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
          <button className="vidro">Projetos</button>
          <button className="vidro">Sobre mim</button>
          <button className="vidro">Contato</button>
        </StyledSection>
      </StyledHeader>
    </>
  );
};
