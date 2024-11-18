import styled from "styled-components";
import Hero from "../components/home/Hero";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  min-height: 100vh;
  background-color: #f9f9f9;
  color: #333;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

function AppLayOut() {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
}

export default AppLayOut;
