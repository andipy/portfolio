import React from "react";
import '../index.css';

const Header = () => {
    return (
        <div className="container mx-xs-auto min-h-xs-100vh flex-column-xs flex-row-lg align-items-center justify-content-center text-white">
            
                <div className="flex-column-xs justify-content-center w-xs-100 w-lg-70 w-xl-65 w-xxl-60">
                    <h4 className="font-size-xs-1_2rem font-weight-xs-500">Hello there👋 Daniel here😊</h4>
                    <h1 className="font-size-xs-2_2rem font-size-sm-3rem font-size-md-3_6rem font-size-lg-4rem font-size-xl-5rem font-weight-xs-600 line-height-90 mt-xs-1_8 mt-sm-4 mb-xs-1_4 mb-sm-2 letter-spacing-xs-negative-_1rem letter-spacing-md-negative-_3rem">I'm a (digital) product designer, product manager and frontend developer</h1>
                    <h2 className="font-size-xs-1_4rem font-size-sm-1_5rem font-size-md-1_6rem font-weight-xs-300 line-height-140">I am 100% <code className="font-size-xs-1_3rem bg-dark-800 rounded-04 border-dark-700 px-xs-1 text-orange-400 font-weight-xs-500">design it user-centered</code> and 100% <code className="font-size-xs-1_3rem bg-dark-800 rounded-04 border-dark-700 px-xs-1 text-orange-400 font-weight-xs-500">let's-code-the-product-up, fellow nerds!</code></h2>
                </div>

                <div className="flex-column-xs justify-content-center align-items-center w-xs-100 w-lg-30 w-xl-35 w-xxl-40 bg-dark-800 rounded-04 mt-xs-2 mt-md-0">
                    <p className="inline-flex-row-xs">column with image</p>
                </div>
            
        </div>
    )
}

export default Header;