import React from 'react'
import "./user.css"
const UserImg = (props) => {
  return (
    <div className='User-image'>
      <div className="left-image">
        <img src={props.img}/>
      </div>
      <div className="right-info">
        <div className="video-content">
            <img src={props.img2}/>
            <p>{props.qoral}</p>
        </div>
      </div>
    </div>
  )
}

export default UserImg
