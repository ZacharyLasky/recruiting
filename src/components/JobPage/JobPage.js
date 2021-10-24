import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as jobs from './jobs';
import * as JobPageStyle from './JobPageStyle';

export default function JobPage() {
  return (
    <Router>
      <JobPageStyle.Container>
        <Switch>
          <Route exact path="/jobs/srfrontendengineer">
            <jobs.SrFrontendEngineer />
          </Route>
          <Route path="/jobs">
            <h2>No jobs here</h2>
          </Route>
        </Switch>
      </JobPageStyle.Container>
    </Router>
  );
}
