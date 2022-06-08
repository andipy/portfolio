import React, { useState, useContext } from "react";
import { ExperienceContext } from "../context/ExperienceContext";

import Tag from "../components/Tag";

const SectionLive = () => {

    const [experiences, setExperiences] = useContext(ExperienceContext);

    return (
        <div className="container mx-xs-auto">
            {experiences.map((item) => {
                if ( item.experience == 'Lives' ) {
                    return (
                        <div key={item.experience}>
                            <h2 className="text-white">{item.experience}</h2>
                            <h4 className="text-white">What I've done</h4>
                            {item.tags.map((tag) => {
                                return (
                                    <Tag tag={tag} key={tag} />
                                )                    
                            })}
                        </div>
                    )
                }                                
            })}
        </div>
    )
}

export default SectionLive;