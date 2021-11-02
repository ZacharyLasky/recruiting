import React from 'react';
import styled from 'styled-components';

export const UXDesigner = () => {
  return (
    <Container>
      <h2>UX Designer</h2>

      <h3>Info</h3>
      <ul>
        <li>Salary: $70k-$100k</li>
        <li>
          Location: Anywhere in US (100% remote), but preferably in Eastern, Central or Mountain
          time zone
        </li>
        <li>Experience Required: 1+ years</li>
        <li>Only US Citizens and Greencard holders</li>
      </ul>

      <h3>Your day-to-day</h3>
      <ul>
        <li>
          Work with Product Managers to design end-to-end customer journeys and deliver
          user-centered products
        </li>
        <li>
          Conduct user interviews and prototype testing sessions to improve products and achieving
          business outcomes such as maximizing completion rates
        </li>
        <li>Create high-level design flows in conjunction with the product team</li>
        <li>
          Create client-specific iterations of product prototypes incorporating client’s branding
          and functional requirements
        </li>
        <li>
          Document guidelines driving design consistency and that encourage modular reuse of
          components
        </li>
      </ul>

      <h3>Design Skills</h3>
      <ul>
        <li>
          <strong>FIGMA</strong> - you are fluent in FIGMA, you can create components and ensure
          they propagate footers, headers to multiple screens. You can wire together prototype
          screens.
        </li>
        <li>
          Demonstrable understanding of Material UI design principles. You can show multiple
          examples of prior work where interfaces have adhered to these principles.
        </li>
        <li>Bonus: You have worked with the Material UI FIGMA library.</li>
        <li>Bonus: You can design icons and create clipart illustrations</li>
        <li>
          Bonus: You are an expert at optimizing images for the web down to small filesizes while
          retaining image quality
        </li>
      </ul>

      <h3>Experience</h3>
      <ul>
        <li>
          Experience developing web application SaaS products, either B2C or B2B (ideally both)
        </li>
        <li>Experience working collaboratively with product management and engineering teams</li>
        <li>
          You have applied brand guidelines for multiple Fortune 500 companies to product wireframes
        </li>
      </ul>

      <h3>Personal Motivations & Qualities</h3>
      <ul>
        <li>
          You prefer taking a basic product vision from a product manager and fleshing it into a
          full prototype over creating marketing web pages
        </li>
        <li>You work well under pressure with tight deadlines and quick turnarounds</li>
        <li>
          You are a great communicator - if you are given an impossible task or deadline you will
          figure out what can and cannot be done and communicate what can be done effectively
        </li>
        <li>You can structure and reliably execute a work plan with little supervision</li>
        <li>
          You have the ambition to "make a dent in the universe" and you are interested in investing
          time to constantly improve as a professional
        </li>
        <li>
          If the reasoning behind a mandate is not clear, you ask “why” so you fully understand the
          problem to be solved, rather than just blindly executing.
        </li>
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
