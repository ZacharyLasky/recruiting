import React from 'react';
import * as descriptivePageStyle from './DescriptivePageStyle';

export default function DescriptivePage({ content }) {
  const lineBreaks = () => {
    {
      window.innerWidth >= 900 && (
        <>
          <br />
          <br />
          <br />
        </>
      );
    }
  };

  return (
    <descriptivePageStyle.Container
      className="descriptive-page-container"
      rowReverse={content.rowReverse}>
      <descriptivePageStyle.TextWrapper className="descriptive-page-text-wrapper">
        <div className="descriptive-page-paragraph-one-wrapper">
          <h1>
            <descriptivePageStyle.TextSpan className="descriptive-page-text-one">
              {content.text.first}
            </descriptivePageStyle.TextSpan>
          </h1>
        </div>
        {lineBreaks()}
        <div className="descriptive-page-paragraph-two-wrapper">
          <h1>
            <descriptivePageStyle.TextSpan className="descriptive-page-text-two">
              {content.text.second}
            </descriptivePageStyle.TextSpan>
            <descriptivePageStyle.TextSpan
              className="descriptive-page-text-two"
              textSectionColor={content.textSectionColor}>
              {content.text.highlightedText}
            </descriptivePageStyle.TextSpan>
          </h1>
        </div>
        {lineBreaks()}
        <div className="descriptive-page-paragraph-three-wrapper">
          <h1>
            <descriptivePageStyle.TextSpan className="descriptive-page-text-three">
              {content.text.third}
            </descriptivePageStyle.TextSpan>
          </h1>
        </div>
        {lineBreaks()}
      </descriptivePageStyle.TextWrapper>
      <descriptivePageStyle.ImageWrapper>{content.image}</descriptivePageStyle.ImageWrapper>
    </descriptivePageStyle.Container>
  );
}
