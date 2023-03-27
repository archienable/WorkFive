import React from 'react';
import {NavLink} from "react-router-dom";
import './Crumbs.css'

const Crumbs = () => {
    return (
        <div className='crumbs'>
            <NavLink to='/home' className='navCrumbs'>
                Главная
            </NavLink> {' '}
            > Мои магазины
        </div>
    );
};

export default Crumbs;