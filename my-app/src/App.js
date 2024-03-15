import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero section/Hero';
import logo from "./logo.svg"
import {RiCloseLine , RiMenu3Line}from "react-icons/ri"
import { useState } from 'react';
import {createContext } from 'react'
import User from './Components/User/User';
import Platform from './Components/platforms/Platform';
import ReactFuture from './Components/Reacfuture.jsx/ReactFuture';
import Imageslider from './Components/ImageSliding/Imageslider';
import Footer from './Components/Footer/Footer';
export const ThemeContext = createContext("light")
function App() {
  const [Theme, SetTheme] = useState("light")
  const [clicks, setClick] = useState(false)
  const[toggle, setToggle] = useState(false)
  const toggleTheme = () =>{
    SetTheme((curr)=>(curr == "light" ? "dark" :  "light"))
  }

  const Click=()=>{
    setClick(true)
  }

  const handleOverlay = (e) => {
    let target = e.target
    return !e.target.classList.contains('search-return') ? setClick(false) : null
  }
  return (
    <div className="App"  id={Theme}> 
    <ThemeContext.Provider value={{Theme, SetTheme}}>
       <div className="upper-header">
           <p>Support Palestine<a href="#"> Help Provide Humanitarian Aid to palestine</a></p>
        </div>
        <header>
        <div className='menu-con'>
        {toggle 
          ? <RiCloseLine className='Close' color="#fff" size={40} onClick={() => setToggle(false)} />
          : <RiMenu3Line className='bar' color="#fff" size={40} onClick={() => setToggle(true)} />}
          {toggle &&(
            <nav className='toggles'>
            <div  className='Toggle-container'>
            <p>Learn</p>
            <p>Reference</p>
            <p>Community</p>
            <p>Blog</p>
            </div>
            <div className='lower-toggle'>
              <p>Blog</p>
              <p>Quick react</p>
              <p>Installation</p>
              <p>Learn react</p>
            </div>
            </nav>
          )}
          </div>
            <img src={logo} className='logo'/>
            <div className="input-container">
            <input type="text" placeholder='search' className='click' onClick={Click}/>
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {clicks && (
              <section className='overlay' onClick={handleOverlay}>
                <div className='search-return'>
                  <div className="search-container">
                      <input type='text' placeholder='Enter something'/>
                      <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <p>No Recent searches</p>
                </div>
              </section>
            )}
            <nav>
            <ul><li><a href="#">Learn</a></li></ul>
            <ul><li><a href="#">Reference</a></li></ul>
            <ul><li><a href="#">Community</a></li></ul>
            <ul><li><a href="#">Blog</a></li></ul>
            <i className="fa-solid fa-sun" onClick={toggleTheme}></i>
            <a href='https://www.github.com'><i className="fa-brands fa-github"></i></a>
            </nav>
        </header>
              <Hero/>
              <User/>
              <Platform/>
              <ReactFuture/>
              <Imageslider/>
              <Footer/>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
