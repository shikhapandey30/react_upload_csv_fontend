import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>
					  <div className="collapse navbar-collapse" id="navbarText">
					    <ul className="navbar-nav mr-auto">
					      <li className="nav-item">
					        <a className="nav-link" href="/">Upload Patient</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="/patients">Patients</a>
					      </li>
					    </ul>
					  </div>
					</nav>
       </div>
    );
}
 
export default Navigation;