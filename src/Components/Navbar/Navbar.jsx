import React, { Component} from 'react';
import { MenuItems} from "./ManuItems"
import '../Styles/Navbar.css'
import { Button } from "../Button"
import {
  Link
} from "react-router-dom";



class Navbar extends Component {
  state = {
    clicked: false
  }
  handleClick() {
    this.setState({ clicked: !this.state.clicked})
  }
  
  render() {
    console.log('STATE', this.state);
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Paulan vihreä maailma <i className="fas fa-leaf"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url}>
            <li key={index}>
              <a className={item.cName}>
                {item.title}
              </a>
            </li>
            </Link>
            )
          })}
        
        </ul>
        <Button/>
      </nav>
    )
  }
}

export default Navbar