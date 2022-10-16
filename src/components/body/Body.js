import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Route, Routes, Redirect, Switch } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/about" exact element={<About />} />
                <Redirect from="/" to="/home" /> 
            </Switch>
        </div>
    );
}

export default Body;