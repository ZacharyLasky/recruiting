import styled from "styled-components";
import * as styles from "../../styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;

  @media (min-width: ${styles.m}) {
    flex-direction: ${(props) => (props.rowReverse ? "row-reverse" : "row")};
    justify-content: space-evenly;
  }
`;

export const text = styled("h1")`
  max-width: 300px;
  color: white;
  font-size: 1.2em;

  @media (min-width: ${styles.l}) {
    max-width: 400px;
  }

  @media (min-width: ${styles.xl}) {
    font-size: 1.5em;
    max-width: 500px;
  }

  @media (min-width: ${styles.xxl}) {
    font-size: 2em;
    max-width: 600px;
  }

  @media (min-width: ${styles.xxxl}) {
    font-size: 2em;
    max-width: 700px;
  }
`;
