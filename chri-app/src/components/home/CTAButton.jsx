import styled from "styled-components";

const GradientButton = styled.button`
  background: ${(props) =>
    props.variant === "contact"
      ? "linear-gradient(to right, #22c55e, #3b82f6)"
      : "linear-gradient(to right, #ef4444, #f59e0b)"};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  background-color: #1e293b;
  position: fixed; /* Keeps it visible */
  bottom: 0rem; /* Distance from the bottom */
  left: 0; /* Align to the left of the viewport */
  width: 100%; /* Full width of the viewport */
  transform: none; /* Remove translation since it's no longer centered */
  z-index: 100; /* Ensure it's above other elements */
  padding: 1rem 0; /* Optional: Add padding for visual balance */
`;

function CTAButton() {
  return (
    <>
      <ButtonsContainer>
        <GradientButton variant="resume">Resume</GradientButton>
        <GradientButton variant="contact">Contact</GradientButton>
        <GradientButton variant="more">More...</GradientButton>
      </ButtonsContainer>
    </>
  );
}

export default CTAButton;
