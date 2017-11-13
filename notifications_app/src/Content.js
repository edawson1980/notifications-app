import React, { Component } from 'react';
import './Content.css';


class Content extends Component {
  render() {
    return(
      <div className="content">
        <div className="line"></div>

        <div className="item">
          <div className="avatar">
            <img src="https://pbs.twimg.com/media/B7MBEEiIYAQtgdT.jpg" alt="screaming possum"/>
          </div>

          <p>test test</p>
        </div>
      </div>
    )
  }
}







export default Content;
