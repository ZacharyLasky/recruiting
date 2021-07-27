import React, { useEffect, useRef } from 'react';
import * as assets from '../../assets';
import * as styles from '../../styles';
import * as homePageStyle from './HomePageStyle';

export default function HomePage() {
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 6000);
  }, []);

  return (
    <homePageStyle.Container className="home-page-container" ref={containerRef}>
      <homePageStyle.HeadingWrapper className="home-page-heading-wrapper">
        <homePageStyle.Heading className="home-page-heading">Not&nbsp;</homePageStyle.Heading>
        <homePageStyle.HeadingTwo className="home-page-heading-two">
          just&nbsp;
        </homePageStyle.HeadingTwo>
        <homePageStyle.HeadingThree className="home-page-heading-three">
          recruiters.
        </homePageStyle.HeadingThree>
      </homePageStyle.HeadingWrapper>
      <homePageStyle.Subheading className="home-page-subheading">
        Software engineers
      </homePageStyle.Subheading>
      <homePageStyle.LogoWrapper className="home-page-logo-wrapper">
        {assets.interview}
      </homePageStyle.LogoWrapper>
    </homePageStyle.Container>
  );
}
