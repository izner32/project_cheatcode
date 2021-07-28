import React, { useState } from 'react';
import "./Home.css";
import Popup from './Popup';

function WebDev() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");

    return (
        <div>
            <section className="section" id = "section">
                <div className="section__div1">
                    <ul className="section__div1__list">
                        <p className="section__div1__list__title">Web Development Cheatcodes</p>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("html") }}>HTML Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content = {content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("css") } }>CSS Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("javascript") } }>Javascript Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("react") } }>ReactJS Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("node") } }>NodeJS Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("express") } }>ExpressJS Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("git") } }>Git Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                    </ul>
                </div>
                <div className="section__div2">
                    <h1 className="section__div2__title">WEB DEVELOPMENT</h1>
                    <div className="section__div2__bg">
                        <p className="section__div2__bg__text"><a href="#">CLICK ME</a></p>
                    </div>
                </div>  
            </section>
        </div>
    )
}

export default WebDev;
