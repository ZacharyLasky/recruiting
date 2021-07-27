import React from 'react';
import * as assets from '../../assets';
import * as homePageStyle from './HomePageStyle';

export default function HomePage() {
  return (
    <homePageStyle.Container className="home-page-container">
      <homePageStyle.HeadingWrapper className="home-page-heading-wrapper">
        <homePageStyle.Heading className="home-page-heading">
          Not just recruiters.
        </homePageStyle.Heading>
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
