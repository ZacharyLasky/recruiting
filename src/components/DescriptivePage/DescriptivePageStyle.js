import styled from 'styled-components';
import * as styles from '../../styles';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${styles.m}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TextWrapper = styled('div')`
  display: flex;
  justify-items: flex-start;
  flex-direction: column;
  padding: 0 20px;

  @media (min-width: ${styles.m}) {
    padding-left: 50px;
  }
`;

export const TextSpan = styled('span')`
  color: ${(props) => props.textSectionColor || 'white'};
  font-size: 1.8vw;

  @media (max-width: ${styles.m}) {
    font-size: 3.8vw;
    max-width: 100vw;
  }
`;
