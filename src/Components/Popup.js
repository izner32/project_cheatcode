import React from 'react'
import "./Popup.css"
import codeContent from "./codeContent";

function Popup(props) {
//     let pageContent;

//     switch(props.content){
//         case "html":
//             pageContent = codeContent[0].webdev[0].html;
//             break;
//         case "css":
//             pageContent = codeContent[0].webdev[0].css;
//             break;
//         default:
//             console.log(`something's not right`);
//     }



    return (
        <div>
            <div className="pop-up--active">
                <div className="pop-up__header">
                    <p className="pop-up__header__title">Title</p>
                    <button className="pop-up__header__button">&times;</button>
                </div>
                <div className="pop-up__content"> 
                    <p className="pop-up__content__text">
                    {/* {pageContent} */}
                    </p>
                </div>
                <div className="pop-up__view">
                    <a href="/" className="pop-up__view__text">View on GitHub</a>
                </div>
            </div>
            <div className="overlay">

            </div>
        </div>
    )
}

export default Popup

