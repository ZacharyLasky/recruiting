import React, { useRef, useState, useEffect } from 'react';
import * as appStyle from './AppStyle';
import * as lib from './lib';
import * as assets from './assets';
import { HomePage, DescriptivePage } from './components';

export default function App() {
  const [chevronClickCount, setChevronClickCount] = useState(0);

  const topRef = useRef();
  const missionRef = useRef();
  const purposeRef = useRef();
  const promiseRef = useRef();

  useEffect(() => {
    if (chevronClickCount === 1) {
      missionRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (chevronClickCount === 2) {
      purposeRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (chevronClickCount === 3) {
      promiseRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    topRef.current.scrollIntoView({ behavior: 'smooth' });
    setChevronClickCount(0);
  }, [chevronClickCount]);

  return (
    <appStyle.Container className="app-container">
      <appStyle.ComponentWrapper className="app-homepage-wrapper" ref={topRef}>
        <HomePage />
      </appStyle.ComponentWrapper>
      <appStyle.ComponentWrapper className="app-mission-wrapper" ref={missionRef}>
        <DescriptivePage content={lib.missionContent} />
      </appStyle.ComponentWrapper>
      <appStyle.ComponentWrapper className="app-purpose-wrapper" ref={purposeRef}>
        <DescriptivePage content={lib.purposeContent} />
      </appStyle.ComponentWrapper>
      <appStyle.ComponentWrapper className="app-promise-wrapper" ref={promiseRef}>
        <DescriptivePage content={lib.promiseContent} />
        <appStyle.ChevronWrapper>
          <appStyle.Chevron onClick={() => setChevronClickCount(chevronClickCount + 1)}>
            {chevronClickCount === 3 ? assets.chevronUp : assets.chevronDown}
          </appStyle.Chevron>
        </appStyle.ChevronWrapper>
      </appStyle.ComponentWrapper>
      <appStyle.SectionFooter>
        <appStyle.LogoWrapper>{assets.logo}</appStyle.LogoWrapper>
        <appStyle.EmailWrapper>
          <appStyle.Email
            className="app-email-candidates"
            href="mailto:candidates@lastkeyrecruiting.com"
            target="_blank">
            candidates@lastkeyrecruiting.com
          </appStyle.Email>
          <appStyle.Email
            className="app-email-companies"
            href="mailto:companies@lastkeyrecruiting.com"
            target="_blank">
            companies@lastkeyrecruiting.com
          </appStyle.Email>
        </appStyle.EmailWrapper>
      </appStyle.SectionFooter>
    </appStyle.Container>
  );
}
