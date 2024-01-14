import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SwipeableDrawer } from '@material-ui/core';
import { GiMoebiusTriangle } from 'react-icons/gi';
import { RiMenu4Line } from 'react-icons/ri';
import Footer from './Footer';

const LayoutIndex = (props) => {
    const [drawer, setDrawer] = useState(false);
    const [navClassName, setNavClassName] = useState('navbar');

    const handleNavStyles = () => {
        if (window.pageYOffset > 400) {
            setNavClassName('navbar-2 navbar');
        } else {
            setNavClassName('navbar');
        }
    };

    useEffect(() => {
        if (props.home) {
            window.addEventListener('scroll', (e) => {
                handleNavStyles();
            });
            return;
        }
        setNavClassName('navbar-2 navbar');
        // eslint-disable-next-line
    }, []);

    const handleDrawer = (state) => {
        setDrawer(state);
    };

    const pages = [
        { link: '/', name: 'Home' },
        { link: '/contact', name: 'Contact Us' },
        { link: '/about', name: 'About' },
    ];
    // { link: '/contribute', name: 'Contribute' },

    return (
        <div className='layout'>
            <div className={navClassName}>
                <RiMenu4Line
                    className='ham'
                    onClick={() => handleDrawer(true)}
                />
                <div className='name-detail'>
                    <GiMoebiusTriangle className='logo' />
                </div>
                <div className='links'>
                    {pages.map((page, index) => (
                        <NavLink
                            exact
                            to={page.link}
                            className='link'
                            key={`page-${index}`}
                            activeClassName='link-active'
                        >
                            {page.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {props.children}
            <div>
                <Footer />
            </div>

            <SwipeableDrawer
                open={drawer}
                onOpen={() => handleDrawer(true)}
                onClose={() => handleDrawer(false)}
            >
                <div className='side-links'>
                    {pages.map((page, index) => (
                        <NavLink
                            exact
                            to={page.link}
                            key={`page-${index}`}
                            className='side-link'
                            onClick={() => handleDrawer(false)}
                            activeClassName='side-link-active'
                        >
                            {page.name}
                        </NavLink>
                    ))}
                </div>
            </SwipeableDrawer>
        </div>
    );
};

export default LayoutIndex;
