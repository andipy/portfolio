import React from "react";
import '../index.css';

import Icon from '../assets/icons/Icon.svg';

const Tag = ({ tag }) => {
    return (
        <div className="xs-inline-flex-row align-items-center bg-teal-300-014 px-xs-2 py-xs-08 rounded-04 mr-xs-04">
            <img src={Icon} alt="" className="mr-xs-025"/>
            <h5 className="font-weight-xs-400 text-teal-300">{tag}</h5>
        </div>
    )
}

export default Tag;