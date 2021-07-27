import styled from 'styled-components';
import * as styles from '../../styles';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${styles.xl}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 20px;

  @media (min-width: 700px) {
    margin: 60px;
  }

  @media (min-width: 1000px) {
    margin: 60px;
  }
`;

export const ParagraphWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 10vh 0 -10vh 0;

  @media (min-width: ${styles.m}) {
    padding-left: 50px;
    margin: 0;
  }
`;

export const TextSpan = styled('span')`
  color: ${(props) => props.textSectionColor || 'white'};
  font-size: 1.8vw;

  @media (max-width: ${styles.m}) {
    font-size: 2.8vw;
    max-width: 100vw;
  }

  @media (max-width: ${styles.s}) {
    font-size: 3.6vw;
    max-width: 100vw;
  }
`;
