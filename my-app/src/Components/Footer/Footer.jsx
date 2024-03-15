import React from 'react'
import "../Footer/footer.css"
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer1">

        <h4>meta Open Source</h4>
        <p>©2023</p>
        </div>
        <div className="footer">
            <h4>learn react</h4>
            <a href="#">Quick  Start</a>
            <a href="#">Installation</a>
            <a href="#">describe The Ui </a>
            <a href="#">Adding interactivity</a>
            <a href="#">Managing state</a>
            <a href="#">Escape hatches</a>
        </div>
        <div className="footer">
            <h4>Api references</h4>
            <a href="#">React Api</a>
            <a href="#">React Doms Api</a>
        </div>
        <div className="footer">
            <h4>Community</h4>
            <a href="#">Code of conduct</a>
            <a href="#">meet the team</a>
            <a href="#">docs conrobution</a>
            <a href="#">Aknowledgements</a>

        </div>
        <div className="footer">
            <h4>More</h4>
            <a href="#">Blog</a>
            <a href="#">React Native</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
        </div>
    </div>
  )
}

export default Footer
