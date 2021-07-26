import styled from 'styled-components';
import * as styles from '../../styles';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;

  @media (min-width: ${styles.m}) {
    flex-direction: ${(props) => (props.rowReverse ? 'row-reverse' : 'row')};
    justify-content: space-evenly;
  }
`;

export const text = styled('h1')`
  max-width: 45vw;
  color: white;
  font-size: 2vw;
`;
