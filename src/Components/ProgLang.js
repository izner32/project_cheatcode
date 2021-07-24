import React from 'react'
import "./Home.css";

function ProgLang() {
    return (
        <div>
            <section className="section" id = "section1">
                <div className="section__div1">
                    <ul className="section__div1__list">
                        <p className="section__div1__list__title">Programming Language Cheatcodes</p>
                        <li className="section__div1__list__item">
                            <a href="#">Python</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">Java</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">C++</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">SQL (MySQL)</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">NoSQL (MongoDB)</a>
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
