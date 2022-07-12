import React from "react";
import '../index.css';

import Icon from '../assets/icons/Icon.svg';

const Tag = ({ tag }) => {
    return (
        <div className="inline-flex-row-xs align-items-center bg-teal-300-014-xs px-xs-2 py-xs-08 rounded-xs-04 mr-xs-04 mb-xs-025">
            <img src={Icon} alt="" className="mr-xs-025 h-xs-075rem w-xs-075rem"/>
            <h5 className="font-weight-xs-400 text-teal-300">{tag}</h5>
        </div>
    )
}

export default Tag;