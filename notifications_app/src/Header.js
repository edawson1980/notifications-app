import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render(){
    return (
      <div className="header">
        {<h2>This is the header</h2>}
        <div className="navigation">
          {<ul>
            <a href="#"><li>Location 1</li></a>
            <a href="#"><li>Location 2</li></a>
            <a href="#"><li>Location 3</li></a>
          </ul>}
        </div>
      </div>
    )
  }
}







export default Header;
