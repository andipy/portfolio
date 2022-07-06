import React from "react";

const Years = () => {
    return (
        <div className="container mx-xs-auto flex-column-xs flex-row-md align-items-center pb-xs-20 pb-sm-12 pb-md-10 pb-xl-8">
            
            <div className="w-xs-35 h-xs-31vw relative overflow-xs-hidden">
                <div className="flex-column-xs absolute top-0 years-slide">
                    <p className="display-inline-block-xs font-size-xs-100vw font-size-md-44vw font-weight-xs-700 line-height-70 text-teal-300">5</p>
                    <p className="display-inline-block-xs font-size-xs-100vw font-size-md-44vw font-weight-xs-700 line-height-70 text-teal-300">3</p>
                </div>
            </div>

            <div className="flex-md-column">
                <p className="font-size-xs-1_5rem font-size-md-2_6vw text-white">years of professional experience as a</p>
                <div className="w-xs-full h-xs-25vw relative overflow-xs-hidden">
                    {/* <p className="w-xs-full font-size-xs-4rem font-size-md-14vw font-weight-xs-600 line-height-80 text-teal-300 letter-spacing-xs-negative-_4rem letter-spacing-md-negative-_8rem letter-spacing-lg-negative-1_2rem letter-spacing-xl-negative-1_5rem">product</p> */}
                    <div className="absolute top-0 years-slide">
                        <div>                            
                            <p className="w-xs-full font-size-xs-4rem font-size-md-14vw font-weight-xs-600 line-height-80 text-teal-300 letter-spacing-xs-negative-_4rem letter-spacing-md-negative-_8rem letter-spacing-lg-negative-1_2rem letter-spacing-xl-negative-1_5rem">designer</p>
                        </div>
                        <div>
                            
                            <p className="w-xs-full font-size-xs-4rem font-size-md-14vw font-weight-xs-600 line-height-80 text-teal-300 letter-spacing-xs-negative-_4rem letter-spacing-md-negative-_8rem letter-spacing-lg-negative-1_2rem letter-spacing-xl-negative-1_5rem">manager</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Years;