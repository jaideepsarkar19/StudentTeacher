import React from 'react';
import './App.css';
import Login from './component/Login'
import StudentList from './component/StudentList'
import {AddStudent,EditStudent} from './component/AddStudent'
import NotFound from './component/NotFound'
import MyDetails from './component/MyDetails'

import {
  BrowserRouter as Router,
  Route,
  Routes,
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
       <Router>
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/students" element={<StudentList/>} />
          <Route exact path="/add-student" element={<AddStudent/>} />
          <Route exact path="/edit-student/:id" element={<EditStudent/>} />
          <Route exact path="/my-details/:id" element={<MyDetails/>} />
          <Route element={<NotFound/>} />
        </Routes>
      {/* <h1>hii</h1> */}
      
      </Router>
      
    </div>
  );
}

export default App;
