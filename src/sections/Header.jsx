import React from "react";
import '../index.css';

const Header = () => {
    return (
        <div className="container mx-xs-auto text-white pt-xs-28 pt-sm-20 pt-md-16 pt-lg-12 pt-xl-10 pb-xs-20 pb-sm-12 pb-md-10 pb-xl-8">
            <div className="flex-column-xs flex-row-lg h-xs-inherit">
                <div className="flex-column-xs justify-content-center w-md-100 w-lg-70 w-xxl-60">
                    <h4 className="font-size-xs-1_2rem font-weight-xs-500">Hello there👋 Daniel here😊</h4>
                    <h1 className="font-size-xs-2_2rem font-size-sm-3rem font-size-md-3_6rem font-size-lg-5rem font-weight-xs-600 line-height-90 mt-xs-1_8 mt-sm-4 mb-xs-1_4 mb-sm-2 letter-spacing-xs-negative-_3rem">I'm a (digital) product designer, product manager and frontend developer</h1>
                    <h2 className="font-size-xs-1_4rem font-size-sm-1_5rem font-size-md-1_6rem font-weight-xs-300 line-height-140">I am 100% <code className="font-size-xs-1_3rem bg-dark-800 rounded-04 border-dark-700 px-xs-1 text-orange-400 font-weight-xs-500">design it user-centered</code> and 100% <code className="font-size-xs-1_3rem bg-dark-800 rounded-04 border-dark-700 px-xs-1 text-orange-400 font-weight-xs-500">let's-code-the-product-up, fellow nerds!</code></h2>
                </div>
                <div className="flex-column-xs justify-content-center w-md-100 w-lg-30 w-xxl-40 bg-dark-800 rounded-04"></div>
            </div>
        </div>
    )
}

export default Header;