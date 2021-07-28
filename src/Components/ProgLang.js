import React, {useState} from 'react';
import "./Home.css";
import Popup from "./Popup";

function ProgLang() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");

    return (
        <div>
            <section className="section" id = "section1">
                <div className="section__div1">
                    <ul className="section__div1__list">
                        <p className="section__div1__list__title">Programming Language Cheatcodes</p>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("python") } }>Python Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("java") } }>Java Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("cpp") } }>C++ Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("mysql") } }>MySQL Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("mongodb") } }>MongoDB Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                    </ul>
                </div>
                <div className="section__div2">
                    <h1 className="section__div2__title">PROGRAMMING</h1>
                    <div className="section__div2__bg">
                        <p className="section__div2__bg__text"><a href="#">CLICK ME</a></p>
                    </div>
                </div> 
            </section>
        </div>
    )
}

export default ProgLang;
