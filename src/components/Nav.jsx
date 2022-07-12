import React, { useState } from "react";

const Nav = () => {

    // state and function to slide out / slide in the navbar on scroll down and up    
    let lastScrollPos = window.scrollY;
    let currentScrollPos;
    const [scrollY, setScrollY] = useState(false);
    window.addEventListener('scroll', function(e) {
        currentScrollPos = e.path[1].scrollY;
        if ( lastScrollPos < currentScrollPos ) {
        setScrollY(true);
        } else if ( lastScrollPos > currentScrollPos ) {
        setScrollY(false);
        }
        lastScrollPos = currentScrollPos;
    });

    return (
        <nav className={scrollY ? 'text-white bg-dark-800-xs fixed w-xs-full top-xs-hidden z-index-5' : 'text-white bg-dark-800-xs fixed w-xs-full top-xs-0 z-index-5'}>
            <div className="container mx-xs-auto flex-row-xs h-xs-inherit py-xs-6 py-sm-4 py-md-3 py-lg-2 align-items-center justify-content-between">
                <div>logo</div>
                <ul className="flex-row-xs">
                    <li className="inline-flex-row-xs ml-xs-2">Item</li>
                    <li className="inline-flex-row-xs ml-xs-2">Item</li>
                    <li className="inline-flex-row-xs ml-xs-2">Item</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;