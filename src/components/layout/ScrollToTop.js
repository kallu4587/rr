import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

// component not working yet
const ScrollToTop = () => {
    const [display, setDisplay] = useState(false);

    const toggleScroll = () => {
        if (window.pageYOffset > 350) {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            toggleScroll();
        });
    }, []);

    const gotoTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    if (setDisplay) {
        return (
            <div className='scroll-top-wrapper'>
                <IoIosArrowUp className='scroll-icon' style={{display }} onClick={gotoTop} />
            </div>
        );
    } else {
        return <>
        </>;
    }
};

export default ScrollToTop;
