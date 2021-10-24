import styled from 'styled-components';
import * as styles from '../../styles';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${styles.m}) {
    flex-direction: ${(props) => (props.rowReverse ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
`;

export const ImageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: -30px 20px 0 20px;
`;

export const TextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media (min-width: ${styles.m}) {
    padding-left: 50px;
    margin: 0;
    justify-content: space-evenly;
    height: 70%;
    line-height: 1.5;
  }
`;

export const ParagraphWrapper = styled('div')`
  display: flex;
`;

export const TextSpan = styled('span')`
  font-weight: bold;
  color: ${(props) => props.textSectionColor || 'gray'};
  font-size: 1.4vw;

  @media (min-width: ${styles.xxxl}) {
    font-size: 1vw;
    max-width: 100vw;
  }

  @media (max-width: ${styles.m}) {
    font-size: 2.8vw;
    max-width: 100vw;
  }

  @media (max-width: ${styles.s}) {
    font-size: 3.6vw;
    max-width: 100vw;
  }
`;
