import React from 'react';
import styled from 'styled-components';

export const SrFrontendEngineer = () => {
  return (
    <Container>
      <h2>Senior Frontend Engineer</h2>
      <ul>
        <li>Salary: $100k-160k</li>
        <li>Location: Anywhere in US (100% remote)</li>
        <li>Experience Required: 4+ years</li>
        <li>Only US Citizens and Greencard holders</li>
        <li>Candidate needs to be willing to travel to New York City 4-5 times a year.</li>
      </ul>

      <h3>Day-To-Day</h3>
      <ul>
        <li>Build React.js-based web platforms for our clients </li>
        <li>Standardize work practices for front-end work</li>
        <li>
          Work closely with clients, the client manager and the UI/UX designer to deliver on scope,
          timeline and budget
        </li>
        <li>
          Work closely with the Director of Engineering to ensure smooth deployment and integration
          into the software ecosystem
        </li>
        <li>Contribute to user testing efforts</li>
        <li>Stay abreast of the state of technology, especially React.js</li>
      </ul>

      <h3>Your Profile</h3>
      <ul>
        <li>Bachelor's degree in Computer Science, HCI, or equivalent practical experience</li>
        <li>
          5+ years of implementing and testing mobile-first and responsive front-end development
        </li>
        <li>
          Strong JavaScript expertise and experience in modern UI frameworks (e.g., React/Redux,
          Angular, ES6) and CSS pre-processing frameworks (Sass or Less)
        </li>
        <li>
          Extensive knowledge of the DOM, HTTP, CSS3 (e.g., Flexbox, Grid) and core web technology
          concepts
        </li>
        <li>
          Ability to deep dive into specific client-side areas, like performance, cross-browser
          compatibility, animations and accessibility
        </li>
        <li>
          Experience with disciplined software engineering (test driven design, automated testing,
          code reviews)
        </li>
        <li>Strong communication skills when talking about technical concepts</li>
        <li>
          Has ambition to "make a dent" in the auto/clean energy industry and is interested in
          investing time to constantly improve as a professional
        </li>
        <li>
          Thrives in a company culture where high performance is recognized, and low performers are
          asked to step aside
        </li>
        <li>In the NYC area, or remote and willing to travel to NYC 4x/year</li>
      </ul>
    </Container>
  );
};

const Container = styled('div')`
  margin: 0 30px;
  overflow: scroll;
  line-height: 130%;
  height: 100vh;
`;
