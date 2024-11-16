import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background-color: #1e293b;
  color: white;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  background-color: #1e293b;
  position: fixed; /* Keeps it visible */
  width: 100%; /* Full width of the viewport */
  transform: none; /* Remove translation since it's no longer centered */
  padding: 1rem 0; /* Optional: Add padding for visual balance */
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #3b82f6;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;

    &:hover {
      background-color: #374151;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    top: 100%;
    right: 1rem;
    background-color: #1e293b;
    border: 1px solid #374151;
    display: none; /* Controlled by state if adding a toggle */
  }
`;

const ConnectButton = styled.button`
  background: linear-gradient(to right, #22c55e, #3b82f6);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <NavContent>
        <Logo>Cape Code</Logo>
        <LinksContainer>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contacts</Link>
        </LinksContainer>
        <ConnectButton>Connect</ConnectButton>
      </NavContent>
    </NavBarContainer>
  );
}

export default NavBar;
