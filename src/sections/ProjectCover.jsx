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
        <section className="flex-row-xs align-items-center h-xs-100vh">
            <div className="container mx-xs-auto flex-row-lg flex-column-xs overflow-xs-hidden bg-dark-500 rounded-xs-08 h-xs-80vh h-lg-36vw">
                <div className="flex-row-xs overflow-xs-hidden w-xs-100 w-lg-65 px-xs-1 gap-xs-2 rounded-xs-08 h-xs-80vh h-lg-auto">
                    <div className="w-xs-33 relative rounded-xs-08 rounded-lg-none overflow-xs-hidden">
                        <div className="flex-column-xs absolute w-xs-full top-xs-negative-58">
                            <img src={ArtistFollowed} className="mb-xs-1" alt="" />
                            <img src={FollowedFull} alt="" />
                        </div>                        
                    </div>
                    <div className="w-xs-33 relative rounded-xs-08 rounded-lg-none overflow-xs-hidden">
                        <div className="flex-column-xs absolute w-xs-full top-xs-negative-134">
                            <img src={Leaderboard} className="mb-xs-1" alt="" />
                            <img src={Leaderboard} alt="" />
                        </div>                        
                    </div>
                    <div className="w-xs-33 relative rounded-xs-08 rounded-lg-none overflow-xs-hidden">
                        <div className="flex-column-xs absolute w-xs-full top-xs-negative-50">
                            <img src={InviteFriend} className="mb-xs-1" alt="" />
                            <img src={Profile} alt="" />
                        </div>                        
                    </div>
                </div>
                <div className="h-xs-inherit w-xs-100 w-lg-35 px-xs-2 text-white">
                    <div>
                        <h3 className="font-size-xs-2_2rem">Midly</h3>
                        <p>Midly is the first italian web application born to strengthen the relationship between fans and their favourite singers through gamification, for the sake both of fans and singers. Fans sign up on Midly and can connect their Apple Music account, they follow their favourite singers on Midly and get a point for each song they listen on Apple Music; points let fans to climb the monthly leaderboards in Midly and so they win the prizes published on Midly by singers.</p>
                    </div>

                    <div>
                        <h4 className="font-size-xs-1_4rem">Project type</h4>
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
                        <h4 className="font-size-xs-1_4rem">My roles</h4>
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
                        <h4 className="font-size-xs-1_4rem">My activities</h4>
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