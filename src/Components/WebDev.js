import React from 'react';
import "./Home.css";

function WebDev() {
    return (
        <div>
            <section className="section" id = "section">
                <div className="section__div1">
                    <ul className="section__div1__list">
                        <p className="section__div1__list__title">Web Development Cheatcodes</p>
                        <li className="section__div1__list__item">
                            <a href = "https://github.com/izner32/Full-Stack-Web-Development/blob/main/html_lessons.html">HTML Lessons</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href = "https://github.com/izner32/Full-Stack-Web-Development/blob/main/css_lessons.css">CSS Lessons</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href = "https://github.com/izner32/Full-Stack-Web-Development/blob/main/javascript_lesson.js">Javascript Lessons</a>
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
