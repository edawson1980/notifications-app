import React, { Component } from 'react';

class ActivityItem extends Component {

  render(){
    const activities = [
      {
        timestamp: new Date().getTime(),
        text: "I seen one.",
        user: {
          id: 1,
          avatar: <img src="https://pbs.twimg.com/media/B7MBEEiIYAQtgdT.jpg" alt="screaming possum"/>
        },
        comments: [{from: 'Puddin', text: 'Watch out!'}]
      },
      {
        timestamp: new Date().getTime(),
        text: "There's another!",
        user: {
          id: 2,
          avatar: <img src="https://t2.ea.ltmcdn.com/en/images/1/0/4/img_possums_as_pets_general_guidelines_and_tips_1401_paso_0_600.jpg" alt="screaming possum"/>
        },
        comments: [{from: 'Skrankles', text: 'This does me the unsettles.'}]
      }
    ]

    const {activity} = this.props;
    return(
      <div className="item">
        <div className="avatar">
          <img src={activity.user.avatar}/>
        </div>

        <span className="timeStamp">
          {activity.timestamp}
        </span>

        <p>{activity.text}</p>

        <div className="commentCount">
          {activity.comments.length}
        </div>
      </div>
    )
  }
}





export default ActivityItem;
