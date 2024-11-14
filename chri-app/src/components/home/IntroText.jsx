import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframe for unblurring text
const fadeIn = keyframes`
  0% {
    filter: blur(10px); /* Initial blur */
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column layout by default */
  gap: 10px;
  align-items: center;
  padding: 20px;
  grid-template-columns: 1fr 1fr;
`;

const TextContainer = styled.div`
  position: flex;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  display: absolute;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const TextWrapper = styled.div`
  flex-direction: column;
`;

const Word = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  animation: ${fadeIn} 0.5s ease forwards;
  opacity: 0; /* Initially invisible */
  margin: 0 0.2rem;
  transition: opacity 0.3s ease;

  &:nth-child(${(props) => props.index + 1}) {
    animation-delay: ${(props) => props.index * 0.2}s; /* Staggered animation */
  }
`;

const HighlightedText = styled.span`
  color: red;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 500px; /* Limit max width for larger screens */
    border-radius: 5px;
  }
`;

function IntroText() {
  const introText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem soluta illum earum sed nostrum culpa deleniti repellat sequi magnam recusandae sint labore aliquam architecto, nihil repellendus non alias consectetur ut velit! Facilis doloremque minus suscipit cupiditate, sint libero fugiat minima voluptatibus dolorem eaque ad rerum exercitationem laborum aspernatur itaque deleniti corrupti.";

  const words = introText.split(" ");
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleWords < words.length) {
        setVisibleWords(visibleWords + 1);
      } else {
        clearInterval(interval); // Stop once all words are visible
      }
    }, 500); // Increase/decrease delay here to control speed
    return () => clearInterval(interval);
  }, [visibleWords, words.length]);

  return (
    <Container>
      <TextContainer>
        <TextWrapper>
          {words.slice(0, visibleWords).map((word, index) => (
            <Word key={index} index={index}>
              {index < 10 ? <HighlightedText>{word}</HighlightedText> : word}{" "}
            </Word>
          ))}
        </TextWrapper>
      </TextContainer>
      <ImageContainer>
        <img src="../pr.jpg" alt="pr" />
      </ImageContainer>
    </Container>
  );
}

export default IntroText;
