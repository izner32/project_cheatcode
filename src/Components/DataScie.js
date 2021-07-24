import React from 'react';
import "./Home.css";

function DataScie() {
    return (
        <div>
            <section className="section" id = "section">
                <div className="section__div1">
                    <ul className="section__div1__list">
                        <p className="section__div1__list__title">Data Science Cheatcodes</p>
                        <li className="section__div1__list__item">
                            <a href="#">Probability and Statistics Lessons</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">Linear Algebra Lessons</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">Multivariate Calculus Lessons</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">Machine Learning Algorithms Lessons</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">Numpy Lessons</a>
                        </li>
                        <li className="section__div1__list__item">
                            <a href="#">Pandas and Matplotlib Lessons</a>
                        </li>
                    </ul>
                </div>
                <div className="section__div2">
                    <h1 className="section__div2__title">DATA SCIENCE</h1>
                    <div className="section__div2__bg">
                        <p className="section__div2__bg__text"><a href="#">CLICK ME</a></p>
                    </div>
                </div>  
            </section>
        </div>
    )
}

export default DataScie;
