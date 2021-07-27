import styled from 'styled-components';
import * as styles from './styles';

export const Container = styled('div')`
  background: rgb(8, 19, 19);
  background: linear-gradient(
    90deg,
    rgba(8, 19, 19, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(8, 19, 19, 1) 100%
  );
  height: 100vh;
  font-family: sans-serif;
  overflow: scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ComponentWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${styles.m}) {
    height: 100%;
  }
`;

export const MiddleComponentWrapper = styled(ComponentWrapper)`
  background: gray;
`;

export const SectionFooter = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LogoWrapper = styled('div')`
  display: flex;
  align-self: flex-end;
`;

export const ChevronWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  cursor: pointer;
  animation-name: bounce;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

export const EmailWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

export const Email = styled('div')`
  display: flex;
  align-self: center;
  color: white;
  margin: 0 5px 10px 5px;
  font-size: 1.6vw;

  @media (max-width: ${styles.m}) {
    font-size: 3.6vw;
  }

  @media (min-width: ${styles.l}) {
    margin: 0 10px 10px 10px;
  }
`;
