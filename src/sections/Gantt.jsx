import React, { useContext } from "react";
import { ExperienceContext } from "../context/ExperienceContext";

// import components
import GanttBar from '../components/GanttBar';
import LongArrow from '../assets/icons/LongArrow.svg';

const Gantt = () => {

    const [experiences, setExperiences] = useContext(ExperienceContext);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    return (
        <div className="container mx-xs-auto">
            <div className="xs-flex-row justify-content-between align-items-end">
                <div className="w-xs-85 w-md-60 w-xxl-55">
                    <h3 className="font-size-xs-1_4rem font-size-lg-2_2rem font-weight-xs-500 text-white">I started in late 2017 my professional esperience as a product designer</h3>
                </div>
                <img className="w-xs-15 w-sm-10 w-md-5 lg-display-none" src={LongArrow} alt="" />                
            </div>
            
            <div className="relative carousel mt-xs-1 mt-sm-2 pt-xs-8 pt-sm-6 pt-md-4 pt-lg-2 xs-overflow-x-auto xs-overflow-y-hidden lg-overflow-visible w-xs-carousel w-lg-full">
                <div className="w-xs-300 w-sm-200 w-lg-full pr-xs-carousel pr-lg-0 pt-xs-4 pt-md-2 pt-lg-1 border-top-dark-400-dashed">
                    {experiences.map((experience) => {
                        return (
                            <GanttBar
                                key={experience.htmlExperienceID}
                                experience={experience.experience}
                                htmlExperienceID={experience.htmlExperienceID}
                                htmlExperienceInfoID={experience.htmlExperienceInfoID}
                                timeWorked={experience.timeWorked()}
                                daysWorked={experience.daysWorked()}
                                timeWorkedPerc={experience.timeWorkedPerc()}
                                timeShiftPerc={experience.timeShiftPerc()}
                                startDate={months[experience.start_date.getMonth()] + " " + experience.start_date.getFullYear()}
                                status={experience.status()}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gantt;