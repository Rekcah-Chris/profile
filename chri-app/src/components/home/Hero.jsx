import styled from "styled-components";
import IntroText from "./IntroText";
import CTAButton from "./CTAButton";

const NavContainer = styled.nav`
  position: flex;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem; /* Space between each link */
`;

const NavLink = styled.h1`
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #65a30d; /* Hover color */
  }
`;

const ContentContainer = styled.div`
  padding-top: 10px;
`;

function Hero() {
  return (
    <>
      <NavContainer>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contacts</NavLink>
        </NavLinks>
      </NavContainer>
      <ContentContainer>
        <IntroText />
      </ContentContainer>

      <div>
        <CTAButton />
      </div>
    </>
  );
}

export default Hero;
