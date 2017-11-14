import React, { Component } from 'react';
import ActivityItem from './ActivityItem.js';
import './Content.css';


class Content extends Component {
  render() {
    const {activities} = this.props;

    return(
      <div className="content">
        <div className="line"></div>

        {/*Timeline Item*/}
        {activities.map((activity) => (
          <ActivityItem
            activity = {activity}/>
        ))}
      </div>
    )
  }
}







export default Content;
