import React, { useRef } from 'react';
import * as appStyle from './AppStyle';
import * as lib from './lib';
import * as assets from './assets';
import { HomePage, DescriptivePage } from './components';

export default function App() {
  const topRef = useRef();
  const missionRef = useRef();
  const purposeRef = useRef();
  const promiseRef = useRef();

  return (
    <appStyle.Container className="app-container">
      <appStyle.ComponentWrapper className="app-homepage-wrapper" ref={topRef}>
        <HomePage />
        <appStyle.ChevronWrapper
          onClick={() => missionRef.current.scrollIntoView({ behavior: 'smooth' })}>
          {assets.chevronDown}
        </appStyle.ChevronWrapper>
      </appStyle.ComponentWrapper>
      <appStyle.ComponentWrapper className="app-mission-wrapper" ref={missionRef}>
        <DescriptivePage content={lib.missionContent} />
        <appStyle.ChevronWrapper
          onClick={() => purposeRef.current.scrollIntoView({ behavior: 'smooth' })}>
          {assets.chevronDown}
        </appStyle.ChevronWrapper>
      </appStyle.ComponentWrapper>
      <appStyle.MiddleComponentWrapper className="app-purpose-wrapper" ref={purposeRef}>
        <DescriptivePage content={lib.purposeContent} />
        <appStyle.ChevronWrapper
          onClick={() => promiseRef.current.scrollIntoView({ behavior: 'smooth' })}>
          {assets.chevronDown}
        </appStyle.ChevronWrapper>
      </appStyle.MiddleComponentWrapper>
      <appStyle.ComponentWrapper className="app-promise-wrapper" ref={promiseRef}>
        <DescriptivePage content={lib.promiseContent} />
        <appStyle.ChevronWrapper
          onClick={() => topRef.current.scrollIntoView({ behavior: 'smooth' })}>
          {assets.chevronUp}
        </appStyle.ChevronWrapper>
        <appStyle.Email className="app-email-candidates">
          Candidates - candidates@lastkeyrecruiting.com
        </appStyle.Email>
        <appStyle.Email className="app-email-companies">
          Companies - companies@lastkeyrecruiting.com
        </appStyle.Email>
      </appStyle.ComponentWrapper>
    </appStyle.Container>
  );
}
