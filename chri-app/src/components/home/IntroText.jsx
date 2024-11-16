import styled from "styled-components";
import CTAButton from "./CTAButton";

const IntroContainer = styled.div`
  background-color: #1e293b;
  color: white;
  text-align: center;
  padding: 2.5rem 0;
`;

const ProfileImage = styled.img`
  margin: 0 auto 2rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-cover: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;

  span {
    background: linear-gradient(to right, #22c55e, #3b82f6);
    background-clip: text;
    color: transparent;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #d1d5db;
`;

function IntroText() {
  return (
    <IntroContainer>
      <ProfileImage src="../pr.jpg" alt="prof" />
      <Heading>
        I`m <span>Cape-Code</span>, Front-End Developer
      </Heading>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugit,
        mollitia iure rem iste ex facilis temporibus velit, aperiam odio ab
        vero. Dolorum dolores laboriosam culpa fuga velit molestiae sint
        similique, incidunt cupiditate nam neque odit perferendis doloremque?
        Qui autem fugit at excepturi vitae natus tempora reiciendis sequi
        laboriosam a!
      </Description>
      <CTAButton />
    </IntroContainer>
  );
}

export default IntroText;
