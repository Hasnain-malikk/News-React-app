import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">NewsWave</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link text-white" to="/home">Home</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/business">Business</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
    </ul>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
