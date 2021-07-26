import React from "react";
import * as descriptivePageStyle from "./DescriptivePageStyle";

export default function DescriptivePage({ content }) {
  return (
    <descriptivePageStyle.Container
      className="descriptive-page-container"
      rowReverse={content.rowReverse}
    >
      <div className="descriptive-page-text-wrapper">
        <descriptivePageStyle.text className="descriptive-page-text-one">
          {content.text.first}
        </descriptivePageStyle.text>
        <br />
        <descriptivePageStyle.text className="descriptive-page-text-two">
          {content.text.second}
        </descriptivePageStyle.text>
        <br />
        <descriptivePageStyle.text className="descriptive-page-text-three">
          {content.text.third}
        </descriptivePageStyle.text>
        <br />
      </div>
      {content.image}
    </descriptivePageStyle.Container>
  );
}
