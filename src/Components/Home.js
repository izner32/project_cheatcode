import React from 'react';
import Nav from "./Nav";
import WebDev from './WebDev';
import DataScie from './DataScie';
import ProgLang from './ProgLang';
import Footer from "./Footer";

function Home() {
    return (
        <>
            <div> {/* header */}
                <Nav />
            </div>
            <div> {/* content */}
               <WebDev />
               <DataScie />
               <ProgLang />
            </div>
            <div> {/* footer */}
                <Footer />
            </div>
        </>
    )
}

export default Home
