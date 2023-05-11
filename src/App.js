// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Route,
//   Link
// } from "react-router-dom";

function App() {
  // const[Mode,setMode]=useState(null);
  const[alert,setalert]=useState(null);

  const showAlert = (message,success) =>{
      setalert({
          message: message,
          success: success
      });

      setTimeout(() => {
        setalert(null);
      },1000);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title = "TextUtils" About="About TextUtils"/>
      <Alert alertmsg={alert} alertfun={showAlert}/>
      <div className= "container my-3">
          {/* <Routes> */}
          {/* <Route path="/About" element={<About/>}> */}
          {/* </Route> */}
          <TextForm heading="Enter The Text Here to Analyze"  alertfunc={showAlert}/>
          {/* <Route path="/" element={<TextForm heading="Enter The Text Here to Analyze" mode = {Mode} alertfunc={showAlert}/>}> */}
          {/* </Route> */}
          {/* </Routes> */}
      {/* <TextForm heading="Enter The Text Here to Analyze" mode = {Mode} alertfunc={showAlert}/>  */}
      {/* <About/> */}
      </div>  
      {/* </Router>  */}
    </>
  );
}

export default App;
