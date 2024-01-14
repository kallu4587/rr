import React from 'react';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <p className='copy'>
                    © {new Date().getFullYear()} Robotics Research Lab.
                </p>
                <p className='copy'>All rights reserved.</p>
                <div
                    style={{
                        fontSize: '2px',
                        alignContent: 'right',
                        textAlign: 'right',
                        justifyContent: 'right',
                        marginLeft: '1px',
                    }}
                >
                    Sushant Phalke <br /> Shubham Shinde
                </div>
            </div>
        </div>
    );
};

export default Footer;
