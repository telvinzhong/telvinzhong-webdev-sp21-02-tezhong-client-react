import React from 'react'
import ReactDOM from 'react-dom'
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import home from "./components/home"

function App() {
  return (
      <BrowserRouter>
          <div>
              <Route path="/" exact={true} component={home}/>
              <Route path="/courses" component={CourseManager}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
