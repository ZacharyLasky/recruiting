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
  overflow: hidden;
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
  height: 100%;

  @media (max-width: ${styles.l}) and (orientation: landscape) {
    visibility: hidden;
  }
`;

export const SectionFooter = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 5px solid black;
  background: rgb(8, 19, 19);
  background: linear-gradient(
    90deg,
    rgba(8, 19, 19, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(8, 19, 19, 1) 100%
  );
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 15vh;

  @media (max-width: ${styles.l}) and (orientation: landscape) {
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const LogoWrapper = styled('div')`
  display: flex;
`;

export const ChevronWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: calc(100% - 15vh);
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

export const Chevron = styled('div')`
  cursor: pointer;
  padding: 2vw;
`;

export const EmailWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Cta = styled('h2')`
  display: flex;
  align-self: center;
  color: gray;
  font-size: 1.2vw;
  padding: 2px 0;
  margin: 0 4vw;
  text-decoration: none;

  @media (max-width: ${styles.m}) {
    font-size: 3.2vw;
  }
`;

export const Email = styled('a')`
  display: flex;
  align-self: center;
  color: gray;
  font-size: 1.2vw;
  padding: 2px 0;
  margin: 0 4vw;
  text-decoration: none;
  font-weight: bold;

  @media (max-width: ${styles.m}) {
    font-size: 3.2vw;
  }
`;
