import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Infor from '../pages/Infor'
import ToDo from '../pages/ToDo'

const NavPage = () => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/information" element={<Infor />}/>
                    <Route path="/todo" element={<ToDo />}/>
                </Routes>
            </section>
        </React.Fragment>
    );
};

export default NavPage;