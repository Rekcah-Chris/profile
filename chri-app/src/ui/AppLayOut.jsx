import styled from "styled-components";
import Hero from "../components/home/Hero";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.125rempx;
  background-color: #1e293b;
`;

function AppLayOut() {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
}

export default AppLayOut;
