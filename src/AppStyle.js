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
  height: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const ChevronWrapper = styled('div')`
  display: flex;
  justify-content: center;
  justify-self: flex-end;
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

export const LogoWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: ${styles.m}) {
    align-items: center;
  }
`;

export const LogoSection = styled('div')`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  border: 5px solid white;
  border: ${(props) => `5px solid ${props.routeColor}`};
  border-radius: 10%;
  width: 80px;
  height: 40px;
  cursor: default;

  @media (min-width: ${styles.s}) {
    width: 150px;
    height: 75px;
  }
`;

export const LogoDivider = styled('div')`
  border-left: 5px solid white;
  border-right: 5px solid white;
  width: 80px;
  height: 12px;
  margin-left: 20px;

  @media (max-width: ${styles.m}) {
    margin-left: 0px;
  }

  @media (min-width: ${styles.s}) {
    width: 150px;
    height: 23px;
  }
`;

export const Logo = styled('div')`
  font-size: 12px;

  @media (min-width: ${styles.s}) {
    font-size: 20px;
  }
`;

export const LogoSymbol = styled(Logo)`
  font-size: 40px;

  @media (min-width: ${styles.s}) {
    font-size: 64px;
  }
`;

export const Email = styled('div')`
  display: flex;
  align-self: center;
  color: white;
  margin: 0 5px 10px 5px;
  font-size: 2vw;

  @media (max-width: ${styles.m}) {
    font-size: 4vw;
  }

  @media (min-width: ${styles.l}) {
    margin: 0 10px 10px 10px;
  }
`;
