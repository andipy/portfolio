import React, { useContext } from "react";
import { ExperienceContext } from "../context/ExperienceContext";

import ArtistFollowed from '../assets/project imgs/midly/ArtistFollowed.svg';
import Leaderboard from '../assets/project imgs/midly/Leaderboard.svg';
import FollowedFull from '../assets/project imgs/midly/FollowedFull.svg';
import Profile from '../assets/project imgs/midly/Profile.svg';
import InviteFriend from '../assets/project imgs/midly/InviteFriend.svg';

import Tag from "../components/Tag";

const ProjectCover = () => {

    const [experiences, setExperiences] = useContext(ExperienceContext);

    return (
        <section className="flex-row-xs align-items-center h-xs-auto h-xl-100vh mt-xs-4 mt-md-0">
            <div className="container mx-xs-auto flex-row-xl flex-column-xs overflow-xs-hidden bg-dark-500-xl rounded-xs-08 h-xl-44vw h-xxl-40vw">

                <div className="flex-row-xs overflow-xs-hidden w-xs-100 w-xl-65 px-xl-1 gap-xs-2 rounded-xs-08 h-xs-70vh h-md-80vh h-xl-auto">
                    <div className="w-xs-50 w-md-33 relative rounded-xs-08 rounded-xl-none overflow-xs-hidden">
                        <div className="flex-column-xs absolute w-xs-full top-xs-negative-40 top-md-negative-36 top-lg-negative-58 top-xl-negative-46 top-xxl-negative-51">
                            <img src={ArtistFollowed} className="mb-xs-1" alt="" />
                            <img src={FollowedFull} alt="" />
                        </div>                        
                    </div>
                    <div className="w-xs-50 w-md-33 relative rounded-xs-08 rounded-xl-none overflow-xs-hidden">
                        <div className="flex-column-xs absolute w-xs-full top-xs-negative-85 top-sm-negative-110 top-md-negative-85 top-lg-negative-125 top-xl-negative-100 top-xxl-negative-110">
                            <img src={Leaderboard} className="mb-xs-1" alt="" />
                            <img src={Leaderboard} alt="" />
                        </div>                        
                    </div>
                    <div className="w-xs-50 w-md-33 relative rounded-xs-08 rounded-xl-none overflow-xs-hidden display-none-xs display-inline-block-md">
                        <div className="flex-column-xs absolute w-xs-full top-md-negative-23 top-lg-negative-46 top-xl-negative-40 top-xxl-negative-44">
                            <img src={InviteFriend} className="mb-xs-1" alt="" />
                            <img src={Profile} alt="" />
                        </div>                        
                    </div>
                </div>
                
                <div className="h-xs-inherit w-xs-100 w-xl-35 px-xl-2 py-xs-2 text-white flex-column-xs justify-content-center">
                    <div>
                        <h3 className="font-size-xs-2_2rem font-weight-xs-600">Midly</h3>
                        <p className="font-size-xs-08rem">Midly is the first italian web application born to strengthen the relationship between fans and their favourite singers through gamification, for the sake both of fans and singers. Fans sign up on Midly and connect their Apple Music account, they follow their favourite singers on Midly and get a point for each song they listen on Apple Music; points let fans to climb the monthly leaderboards in Midly, so they win the prizes published on Midly by singers.</p>
                    </div>

                    <div>
                        <h4 className="font-size-xs-1_4rem font-weight-xs-600 mt-xs-1 mt-xl-2">Project type</h4>
                        {experiences.map((item) => {
                            if ( item.experience == 'Midly' ) {
                                return (
                                    <div>
                                        {item.project_type_tags.map((tag) => {
                                            return (
                                                <Tag tag={tag.label} key={tag.label} />
                                            )                    
                                        })}
                                    </div>
                                )
                            }                                
                        })}
                    </div>

                    <div>
                        <h4 className="font-size-xs-1_4rem font-weight-xs-600 mt-xs-1 mt-xl-2">My roles</h4>
                        {experiences.map((item) => {
                            if ( item.experience == 'Midly' ) {
                                return (
                                    <div>
                                        {item.my_roles_tags.map((tag) => {
                                            return (
                                                <Tag tag={tag.label} key={tag.label} />
                                            )                    
                                        })}
                                    </div>
                                )
                            }                                
                        })}
                    </div>

                    <div>
                        <h4 className="font-size-xs-1_4rem font-weight-xs-600 mt-xs-1 mt-xl-2">My activities</h4>
                        {experiences.map((item) => {
                            if ( item.experience == 'Midly' ) {
                                return (
                                    <div>
                                        {item.my_activities_tags.map((tag) => {
                                            return (
                                                <Tag tag={tag.label} key={tag.label} />
                                            )                    
                                        })}
                                    </div>
                                )
                            }                                
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectCover;