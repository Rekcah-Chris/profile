import styled from "styled-components";

const Button = styled.button`
  color: #14532d;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;

  &:hover,
  &:active {
    color: ;
  }
`;

function CTAButton() {
  return <Button>more</Button>;
}

export default CTAButton;
