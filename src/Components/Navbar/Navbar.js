import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Image/logo.jpg'
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img style={{width:'60px'}} src={Logo} alt=""/></Link>
         
          <div >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pubgplayer">pubg_member</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log_In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">KPN Form</Link>
              </li>
             
              
             
            
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;