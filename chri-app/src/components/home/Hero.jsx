import styled from "styled-components";
import NavBar from "./NavBar";
import IntroText from "./IntroText";

const HeroCont = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 2rem 1rem;
  background-color: rgba(30, 41, 59, 0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    padding: 2rem 1rem;
  }

  @media (min-width: 1200px) {
    gap: 40px;
    padding: 4rem 3rem;
  }

  border-radius: 8px;
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
