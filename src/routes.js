import React from 'react';
import  App from './components/app';
import {Route,IndexRoute} from 'react-router';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';  

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="about" component={AboutPage}/>
        <Route path="courses" components={CoursesPage}/>
        <Route path="course" components={ManageCoursePage}/>
        <Route path="course/:id" components={ManageCoursePage}/>
    </Route>
)
