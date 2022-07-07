import React, { useContext } from "react";
import { ExperienceContext } from "../context/ExperienceContext";

// import components
import GanttBar from '../components/GanttBar';
import LongArrow from '../assets/icons/LongArrow.svg';

const Gantt = () => {

    const [experiences, setExperiences] = useContext(ExperienceContext);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    return (
        <div className="container mx-xs-auto pb-xs-20 pb-md-0">
            
            <div className="flex-row-xs justify-content-between align-items-end">
                <h3 className="w-xs-80 w-sm-70 w-md-80 w-lg-80 w-xl-65 w-xxl-50 font-size-xs-1_4rem font-size-md-1_8rem font-size-lg-2_2rem font-weight-xs-500 text-white letter-spacing-xs-negative-_1rem">I started in late 2017 my professional esperience as a product designer</h3>
                <img className="w-xs-10 w-sm-10 w-md-5 display-none-lg" src={LongArrow} alt="" />                
            </div>
            
            <div className="relative carousel mt-xs-2 pt-xs-8 pt-sm-6 pt-md-4 pt-lg-2 overflow-x-xs-auto overflow-y-xs-hidden overflow-lg-visible w-xs-carousel w-lg-full">
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