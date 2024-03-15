import React from 'react'
import "./platform.css"
import apple from "../images/Apple.png"
import Android from "../images/android.png"
import firefox from "../images/fox.png"
import safari from "../images/safari.png"
import chrome from "../images/chrome.png"
const Platform = () => {
  return (
    <div className='Platform-container'>
      <h1>Use the best from <br /> every platform</h1>
      <p>People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.</p>
      <div className="platforms-sides">
        <div className="left-platform">
            <h2>Stay true to the web</h2>
            <p>People expect web app pages to load fast. On the server, React lets you start streaming HTML while you’re still fetching data, progressively filling in the remaining content before any JavaScript code loads. On the client, React can use standard web APIs to keep your UI responsive even in the middle of rendering.</p>
            <div className="firefox"><img src={firefox} /></div>
            <div className="chrome"><img src={chrome} /></div>
            <div className="safari"><img src={safari} /></div>
        </div>
        <div className="right-platform">
            <h2>Go truly native</h2>
            <p>People <a href="#">expect native</a> apps to look and feel like their platform. <a href="#">  React Native</a> and Expo let you build apps in React for Android, iOS, and more. They look and feel native because their UIs are truly native. It’s not a web view—your React components render real Android and iOS views provided by the platform.</p>
            <div className="apple"><img src={apple} alt="" /></div>
            <div className="android"><img src={Android} alt="" /></div>
        </div>
      </div>
      <div className="lower-paragraph">
        <p>With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.</p>
        <button> <i class="fa-solid fa-laptop-code"></i> Bild For native Apps <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default Platform
