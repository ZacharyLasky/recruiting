import React from 'react';
import * as descriptivePageStyle from './DescriptivePageStyle';

export default function DescriptivePage({ content }) {
  return (
    <descriptivePageStyle.Container
      className="descriptive-page-container"
      rowReverse={content.rowReverse}>
      <div className="descriptive-page-text-wrapper">
        <div className="descriptive-page-paragraph-one-wrapper">
          <descriptivePageStyle.Text
            className="descriptive-page-text-one"
            textSectionColor={content.rowReverse && 'black'}>
            {content.text.first}
          </descriptivePageStyle.Text>
        </div>
        <br />
        <div className="descriptive-page-paragraph-two-wrapper">
          <descriptivePageStyle.Text
            className="descriptive-page-text-two"
            textSectionColor={content.rowReverse && 'black'}>
            {content.text.second}
          </descriptivePageStyle.Text>
          <descriptivePageStyle.Text
            className="descriptive-page-text-two"
            textSectionColor={content.textSectionColor}>
            {content.text.highlightedText}
          </descriptivePageStyle.Text>
        </div>
        <br />
        <div className="descriptive-page-paragraph-three-wrapper">
          <descriptivePageStyle.Text
            className="descriptive-page-text-three"
            textSectionColor={content.rowReverse && 'black'}>
            {content.text.third}
          </descriptivePageStyle.Text>
        </div>
        <br />
      </div>
      <descriptivePageStyle.ImageWrapper>{content.image}</descriptivePageStyle.ImageWrapper>
    </descriptivePageStyle.Container>
  );
}
