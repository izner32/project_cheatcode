import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return (
        <div>
            <header className ="nav">
                <a className = "nav__webdev">Web Dev</a>
                <a className = "nav__datascie">Data Scie</a>
                <a className = "nav__proglang">Prog Lang</a>
            </header>
        </div>
    )
}

export default Nav

