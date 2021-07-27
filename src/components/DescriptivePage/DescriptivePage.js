import React from 'react';
import * as descriptivePageStyle from './DescriptivePageStyle';

export default function DescriptivePage({ content }) {
  return (
    <descriptivePageStyle.Container
      className="descriptive-page-container"
      rowReverse={content.rowReverse}>
      <descriptivePageStyle.TextWrapper className="descriptive-page-text-wrapper">
        <descriptivePageStyle.ParagraphWrapper className="descriptive-page-paragraph-one-wrapper">
          <p>
            <descriptivePageStyle.TextSpan className="descriptive-page-text-one">
              {content.text.first}
            </descriptivePageStyle.TextSpan>
          </p>
        </descriptivePageStyle.ParagraphWrapper>
        <descriptivePageStyle.ParagraphWrapper className="descriptive-page-paragraph-two-wrapper">
          <p>
            <descriptivePageStyle.TextSpan className="descriptive-page-text-two">
              {content.text.second}
            </descriptivePageStyle.TextSpan>
            <descriptivePageStyle.TextSpan
              className="descriptive-page-text-two"
              textSectionColor={content.textSectionColor}>
              {content.text.highlightedText}
            </descriptivePageStyle.TextSpan>
          </p>
        </descriptivePageStyle.ParagraphWrapper>
        <descriptivePageStyle.ParagraphWrapper className="descriptive-page-paragraph-three-wrapper">
          <p>
            <descriptivePageStyle.TextSpan className="descriptive-page-text-three">
              {content.text.third}
            </descriptivePageStyle.TextSpan>
          </p>
        </descriptivePageStyle.ParagraphWrapper>
      </descriptivePageStyle.TextWrapper>
      <descriptivePageStyle.ImageWrapper>{content.image}</descriptivePageStyle.ImageWrapper>
    </descriptivePageStyle.Container>
  );
}
