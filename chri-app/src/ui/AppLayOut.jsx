import styled from "styled-components";
import Hero from "../components/home/Hero";

const HomeContainer = styled.div`
  position: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: #f8fafc;
`;

function AppLayOut() {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
}

export default AppLayOut;
