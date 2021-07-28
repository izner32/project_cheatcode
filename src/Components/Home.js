import React from 'react';
import Nav from "./Nav";
import WebDev from './WebDev';
import DataScie from './DataScie';
import ProgLang from './ProgLang';
import Footer from "./Footer";
import Popup from "./Popup";

function Home() {
    return (
        <div className="home-wrap">
            <div> {/* header */}
                <Nav />
            </div>
            <div className="home-wrap__content"> {/* content */}
                <WebDev />
                <DataScie />
                <ProgLang />
                {/* <Popup />  */}
            </div>
            <div> {/* footer */}
                <Footer />
            </div>
        </div>
    )
}

export default Home
