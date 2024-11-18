import styled from "styled-components";
import CTAButton from "./CTAButton";

const IntroContainer = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 30px;
  max-width: 1200px;

  @media (min-width: 768px) {
    position: sticky;
    top: 80px;
    padding: 0rem;
    margin-top: 0;
    z-index: 100;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 2px auto 1px;
    position: relative;
  }
`;

const ProfileImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
  margin-bottom: 23px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;

  span {
    background: linear-gradient(to right, #22c55e, #3b82f6);
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #d1d5db;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function IntroText() {
  return (
    <IntroContainer>
      <ProfileImage src="../pr.jpg" alt="Profile" />
      <Heading>
        I`m <span>Cape-Code</span>, Front-End Developer
      </Heading>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit
        ullam accusantium totam cumque distinctio temporibus ipsam facere aut
        ab. Accusantium perferendis atque quas cumque amet laboriosam a, ipsum
        minus impedit corporis eligendi natus ab nostrum iste voluptatum eum
        placeat, aut dicta delectus quasi beatae? Quae, mollitia? Modi, unde!
        Laudantium voluptatibus sequi quo dolorem eum iusto ipsa voluptatum
        consectetur! Enim doloribus cupiditate blanditiis, id commodi veniam
        libero pariatur quidem ipsa velit autem vel adipisci eos illum
        voluptatem, doloremque rem, nemo perspiciatis. Nam, minus earum
        cupiditate maxime itaque quia non autem quas totam iste temporibus
        eligendi voluptas omnis eaque exercitationem deleniti? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Maxime suscipit ullam accusantium
        totam cumque distinctio temporibus ipsam facere aut ab. Accusantium
        perferendis atque quas cumque amet laboriosam a, ipsum minus impedit
        corporis eligendi natus ab nostrum iste voluptatum eum placeat, aut
        dicta delectus quasi beatae? Quae, mollitia? Modi, unde! Laudantium
        voluptatibus sequi quo dolorem eum iusto ipsa voluptatum consectetur!
        Enim doloribus cupiditate blanditiis, id commodi veniam libero pariatur
        quidem ipsa velit autem vel adipisci eos illum voluptatem, doloremque
        rem, nemo perspiciatis. Nam, minus earum cupiditate maxime itaque quia
        non autem quas totam iste temporibus eligendi voluptas omnis eaque
        exercitationem deleniti? iste temporibus eligendi voluptas omnis eaque
        exercitationem deleniti?
      </Description>
      <CTAButton />
    </IntroContainer>
  );
}

export default IntroText;
