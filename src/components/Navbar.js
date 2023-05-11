// import { click } from '@testing-library/user-event/dist/click';
import React,{useState} from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  
  const[Mode,setMode]=useState();
  const callbackfunction = (getColor) =>{
     
    setMode(getColor);
    getColor==='Green'?document.body.style.backgroundColor = '#3b8d63':getColor==='Orange'?document.body.style.backgroundColor = '#e7661a'
    :getColor==='Yellow'?document.body.style.backgroundColor = '#e2e53b':getColor==='Grey'?document.body.style.backgroundColor = '#727263':document.body.style.backgroundColor = Mode;
    
  }
  // const callbackfunction = () =>{
  //   let getid = document.getElementById("1");
  // getid.addEventListener('click',()=>{
  //   setMode('Green');
  //   console.log('event occur');
  // });
  // let getid2 = document.getElementById('2');
  // getid2.addEventListener('click',()=>{
  //   setMode('Orange');
  // });
  // let getid3 = document.getElementById('3');
  // getid3.addEventListener('click',()=>{
  //   setMode('Yellow');
  // });
  // let getid4 = document.getElementById('4');
  // getid4.addEventListener('click',()=>{
  //   setMode('Dark');
  // });
  // }
  return (
    <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/About">{props.About}</Link> */}
        </li>
      </ul>
      <div className="form-check mx-1">
        <input className="form-check-input" onClick={()=>callbackfunction('Orange')} type="radio" name="flexRadioDefault" id="1"/>
        <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
         Light Orange
        </label>
     </div>
      <div className="form-check mx-1">
        <input className="form-check-input" onClick={()=>callbackfunction('Yellow')} type="radio" name="flexRadioDefault" id="2"/>
        <label className="form-check-label text-light" htmlFor="flexRadioDefault2">
        Light Yellow
        </label>
     </div>
    <div className="form-check mx-2">
      <input className="form-check-input" onClick={()=>callbackfunction('Green')} type="radio" name="flexRadioDefault" id="3"/>
      <label className="form-check-label text-light" htmlFor="flexRadioDefault2">
        Light Green
      </label>
    </div>
    <div className="form-check mx-1">
      <input className="form-check-input" onClick={()=>callbackfunction('Grey')}  type="radio" name="flexRadioDefault" id="4"/>
      <label className="form-check-label text-light" htmlFor="flexRadioDefault2">
        Light Dark
      </label>
    </div> 
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}




                  