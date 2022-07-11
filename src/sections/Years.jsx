import React from "react";

const Years = () => {
    return (
        <div className="container mx-xs-auto h-xs-100vh flex-column-xs flex-row-md align-items-center justify-content-center">

            <div className="w-xs-full h-xs-71vw h-md-31vw w-md-35 h-md-31vw relative overflow-xs-hidden">
                <div className="flex-column-xs absolute top-xs-0 years-slide">
                    <p className="display-inline-block-xs font-size-xs-100vw font-size-md-44vw font-weight-xs-700 line-height-70 text-teal-300">5</p>
                    <p className="display-inline-block-xs font-size-xs-100vw font-size-md-44vw font-weight-xs-700 line-height-70 text-teal-300">3</p>
                </div>
            </div>

            <div className="w-xs-full w-md-65 flex-column-xs">
                <p className="w-xs-full h-xs-auto h-md-3vw font-size-xs-1_5rem font-size-md-2_6vw text-white">years of professional experience as a</p>
                <p className="w-xs-full h-xs-auto h-md-14vw font-size-xs-20vw font-size-md-14vw font-weight-xs-600 line-height-80 text-teal-300 letter-spacing-xs-negative-_4rem letter-spacing-md-negative-_8rem letter-spacing-lg-negative-1_2rem letter-spacing-xl-negative-1_5rem">product</p>
                <div className="h-xs-20vw h-md-14vw relative overflow-xs-hidden">
                    <div className="w-xs-full absolute top-xs-0 years-slide">
                        <p className="bg-violet-50 w-xs-full h-xs-20vw h-md-14vw font-size-xs-20vw font-size-md-14vw font-weight-xs-600 line-height-80 text-teal-500 letter-spacing-xs-negative-_4rem letter-spacing-md-negative-_8rem letter-spacing-lg-negative-1_2rem letter-spacing-xl-negative-1_5rem">designer</p>
                        <p className="bg-teal-50 w-xs-full h-xs-20vw h-md-14vw font-size-xs-20vw font-size-md-14vw font-weight-xs-600 line-height-80 text-teal-500 letter-spacing-xs-negative-_4rem letter-spacing-md-negative-_8rem letter-spacing-lg-negative-1_2rem letter-spacing-xl-negative-1_5rem">manager</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Years;