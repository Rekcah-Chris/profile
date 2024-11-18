import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  color: white;
  top: 0;
  z-index: 10px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  padding: 0.78rem;
  background-color: rgba(30, 41, 59, 0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 1.2px auto;
  padding: 1.2px 1.2rem;
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
    display: none; /* Add a toggle for mobile menu */
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
    <>
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
    </>
  );
}

export default NavBar;
