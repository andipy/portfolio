import React from "react";
import '../index.css';

const GanttBar = ({ experience, timeWorked, htmlExperienceID, htmlExperienceInfoID, timeWorkedPerc, timeShiftPerc, startDate, status }) => {

    return (
        <div className="slide-in-wrapper mb-xs-025 mb-md-05">
            <div className="gantt-bar flex-column-xs py-xs-1 py-sm-1_5 py-md-1 py-lg-2 py-xl-1_5 pl-xs-1 rounded-04 font-size-xs-07rem font-weight-xs-700 bg-dark-500 text-white" id={htmlExperienceID} style={{width: timeWorkedPerc + '%', marginLeft: timeShiftPerc + '%'}}>
                <div className="experience-info">
                    <div className="experience-name">{experience}</div>
                    <div className="more-info display-none-xs opacity-0">
                        <span className="mt-xs-025" id={htmlExperienceInfoID}>{timeWorked}</span>                    
                        <span className={`chip rounded-04 w-xs-fit-content mt-xs-025 ${status == 'Closed' ? "bg-teal-200 text-muted-teal-300" : "bg-teal-100 text-teal-800"}`}>{status}</span>
                    </div>
                </div>
                <div className="start-date w-xs-fit-content absolute top-xs-0 ml-xs-negative-1 text-white font-size-xs-07rem font-weight-xs-500 z-index-4">
                    <span>{startDate}</span>                            
                </div>                            
            </div>                        
        </div>
    )
}

export default GanttBar;