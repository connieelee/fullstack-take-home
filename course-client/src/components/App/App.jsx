import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Courses, Course } from '../../pages';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/courses" />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/courses/:courseId">
          <Course />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
