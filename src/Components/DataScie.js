import React, {useState} from 'react';
import "./Home.css";
import Popup from "./Popup";

function DataScie() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    
    return (
        <div>
            <section className="section" id = "section">
                <div className="section__div1">
                    <ul className="section__div1__list">
                        <p className="section__div1__list__title">Data Science Cheatcodes</p>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("probability_and_statistics") } }>Probability and Statistics Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("linear_algebra") } }>Linear Algebra Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("multivariate_calculus") } }>Multivariate Calculus Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("machine_learning_algorithms") } }>Machine Learning Algorithms Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("numpy") } }>Numpy Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                        <li className="section__div1__list__item">
                            <button onClick = { () => { setIsOpen(true); setContent("pandas_and_matplotlib") } }>Pandas and Matplotlib Lessons</button>
                            <Popup status = {isOpen} setIsOpen = {setIsOpen} content ={content}/>
                        </li>
                    </ul>
                </div>
                <div className="section__div2">
                    <h1 className="section__div2__title">DATA SCIENCE</h1>
                    <div className="section__div2__bg">
                        <p className="section__div2__bg__text"><a href1="#">CLICK ME</a></p>
                    </div>
                </div>  
            </section>
        </div>
    )
}

export default DataScie;
