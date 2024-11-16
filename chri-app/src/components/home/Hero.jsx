import styled from "styled-components";
import NavBar from "./NavBar";
import IntroText from "./IntroText";

const HeroCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f8fafc;
  padding: 0;
`;

function Hero() {
  return (
    <HeroCont>
      <NavBar />
      <IntroText />
    </HeroCont>
  );
}

export default Hero;
