import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="title">
          {<h2>Timeline</h2>}
        </div>

        <div className="navigation">
          {<ul>
            <a href="#"><li>Location 1</li></a>
            <a href="#"><li>Location 2</li></a>
            <a href="#"><li>Location 3</li></a>
          </ul>}
        </div>

        <div className="searchIcon">
          <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png"/>
        </div>
      </div>
    )
  }
}







export default Header;
