import React from 'react'
import ReactDOM from 'react-dom'
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import home from "./components/home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Route path="/" exact={true} component={home}/>
              <Route path="/courses" component={CourseManager}/>
              <Route path="/courses/:courseId/quizzes" exact={true} component={QuizzesList}/>
              <Route path="/courses/:courseId/quizzes/:quizId" exact={true} component={Quiz}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
