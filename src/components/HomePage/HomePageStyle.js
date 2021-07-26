import styled from "styled-components";
import * as styles from "../../styles";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeadingWrapper = styled("div")`
  display: flex;
  flex-direction: row;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
`;

export const Heading = styled("h1")`
  color: white;
  font-size: 7vw;
  font-weight: normal;
  margin: 0 auto;
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 4s;
  animation-fill-mode: forwards;
`;

export const HeadingTwo = styled(Heading)`
  padding-left: 1vw;
  animation-delay: 1s;
`;

export const HeadingThree = styled(HeadingTwo)`
  animation-delay: 2s;
`;

export const Subheading = styled("h2")`
  color: ${styles.blue};
  font-size: 10vw;
  margin: 0 auto;
  padding: 30px 0 0 0;
  transform: translateX(-200%);
  animation-name: move;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;

  @keyframes move {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

export const LogoWrapper = styled("div")`
  margin-top: 50px;
`;
