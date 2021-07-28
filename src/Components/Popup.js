import React from 'react'
import "./Popup.css"
import codeContent from "./codeContent";

function Popup({status, setIsOpen, content}) {
    if (!status) return null;

    let pageContent;

    switch(content){
        case "html":
            pageContent = codeContent[0].webdev[0].html;
            break;
        case "css":
            pageContent = codeContent[0].webdev[1].css;
            break;
        case "javascript":
            pageContent = codeContent[0].webdev[2].javascript;
            break;        
        case "react":
            pageContent = codeContent[0].webdev[3].react;
            break;
        case "node":
            pageContent = codeContent[0].webdev[4].node;
            break;
        case "express":
            pageContent = codeContent[0].webdev[5].express;
            break;  
        case "git":
            pageContent = codeContent[0].webdev[6].git;
            break;  
        case "probability_and_statistics":
            pageContent = codeContent[1].data_science[0].probability_and_statistics;
            break;
        case "linear_algebra":
            pageContent = codeContent[1].data_science[1].linear_algebra;
            break;
        case "multivariate_calculus":
            pageContent = codeContent[1].data_science[2].multivariate_calculus;
            break;    
        case "machine_learning_algorithms":
            pageContent = codeContent[1].data_science[3].machine_learning_algorithms;
            break;
        case "numpy":
            pageContent = codeContent[1].data_science[4].numpy;
            break;  
        case "pandas_and_matplotlib":
            pageContent = codeContent[1].data_science[5].pandas_and_matplotlib;
            break;
        case "python":
            pageContent = codeContent[2].programming_languages[0].python;
            break;
        case "java":
            pageContent = codeContent[2].programming_languages[1].java;
            break;  
        case "cpp":
            pageContent = codeContent[2].programming_languages[2].cpp;
            break;
        case "mysql":
            pageContent = codeContent[2].programming_languages[3].mysql;
            break;
        case "mongodb":
            pageContent = codeContent[2].programming_languages[4].mongodb;
            break;                      
        default:
            console.log(`something's not right`);
    }

    console.log(content);

    return (
        <div>
            <div className="pop-up pop-up--active">
                <div className="pop-up__header">
                    <p className="pop-up__header__title">Title</p>
                    <button onClick = { () => setIsOpen(false) } className="pop-up__header__button">&times;</button>
                </div>
                <div className="pop-up__content"> 
                    <code>
                        <pre>
                        <p className="pop-up__content__text">
                            {pageContent}
                        </p>
                        </pre>
                    </code>
                </div>
                <div className="pop-up__view">
                    <a href="/" className="pop-up__view__text">View on GitHub</a>
                </div>
            </div>
            <div className="overlay--active">

            </div>
        </div>
    )
}

export default Popup

