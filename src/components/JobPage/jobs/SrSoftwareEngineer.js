import React from 'react';
import styled from 'styled-components';

export const SrSoftwareEngineer = () => {
  return (
    <Container>
      <h2>Sr. Software Engineer</h2>

      <p>
        Searching for an experienced and motivated full-time Senior Software Engineer as a remote
        position to help us enhance the design, architecture, and functionality of our product
        software to take it to the next level.
      </p>
      <p>
        This position is 100% Remote. This person can sit anywhere in the USA. This is a critical
        and high-profile role and will report directly to the Director of Information Technology.
        Strong communication skills are needed.
      </p>

      <h3>Requirements</h3>
      <ul>
        <li>Strong written and verbal communication skills</li>
        <li>
          Full stack developer with 5+ years of experience architecting & designing Java and
          Javascript applications
        </li>
        <li>5+ years of experience of database development such as MySQL, NoSQL</li>
        <li>Experience with Spring / Spring Boot / Spring Cloud / AWS services / ReactJS</li>
        <li>Experience with Agile methodology / Scrum processes</li>
      </ul>

      <h3>Nice To Haves</h3>
      <ul>
        <li>Work with offshore teams</li>
        <li>
          Experience in architecting, designing and implementing to deliver the best performance,
          scalable, reliable high quality software
        </li>
        <li>Experience in collaborating effectively and mentoring the development team</li>
        <li>Experience with AWS services such as S3, RDS, CloudWatch, SQS, DynamoDB etc</li>
      </ul>

      <h3>What is exciting about this opportunity?</h3>
      <ul>
        <li>Exciting application with AI capabilities</li>
        <li>This is an opportunity to learn in a close knit and collaborative environment</li>
        <li>We offer outstanding benefits, culture and flexibility</li>
        <li>Work from home 100%</li>
      </ul>

      <h3>Day To Day</h3>
      <ul>
        <li>Work with the team to research new frameworks, tools and technologies</li>
        <li>Programming the software for enhancements and support</li>
        <li>Provide technical support and troubleshoot issues in the production environment</li>
        <li>Perform periodic deployments, data export and migrations</li>
      </ul>

      <h3>What we offer</h3>
      <ul>
        <li>Work/life balance: we say it, we mean it!</li>
        <li>
          Generous benefits package: medical, vision and dental benefits, generous 401(k), FSA,
          tuition reimbursement, paid sick/vacation time, and more
        </li>
        <li>An unusually generous and flexible vacation offered - AKA vacation when you need it</li>
        <li>Free use of our Hawaii and Florida beach houses</li>
        <li>
          Individualistic approach: we encourage a personal touch to your work - we don't believe in
          a "one-size-fits-all" approach
        </li>
        <li>Industry reputation</li>
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
