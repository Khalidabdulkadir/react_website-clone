import React from 'react'
import "./user.css"
import UserImg from '../Props/UserImg'
import sawir1 from "../images/javascript.png"
import sawir2 from "../images/th.jpeg"
const User = () => {
  return (
    <div className='user-Container'>
        <div className="text-user">
      <h1>Create user interfaces <br/> from components</h1>
        </div>
    <p>React lets you build user interfaces out of individual
         pieces called components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages, and apps.</p>
        <UserImg img={sawir1} img2={sawir2}/>
    </div>
  )
}
export default User
