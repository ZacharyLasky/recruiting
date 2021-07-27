import styled from 'styled-components';
import * as styles from '../../styles';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex: 1;

  @media (max-width: ${styles.m}) {
    margin-top: 10vh;
  }
`;

export const HeadingWrapper = styled('div')`
  display: flex;
  flex-direction: row;
`;

export const Heading = styled('h1')`
  color: white;
  font-size: 7vw;
  font-weight: normal;
  margin: 0 auto;
`;

export const HeadingTwo = styled(Heading)`
  animation-delay: 1s;
`;

export const HeadingThree = styled(HeadingTwo)`
  animation-delay: 2s;
`;

export const Subheading = styled('h2')`
  color: ${styles.blue};
  font-size: 10vw;
  margin: 0 auto;
  padding: 30px 0 0 0;
`;

export const LogoWrapper = styled('div')`
  margin-top: 50px;
`;
