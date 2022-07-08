import React, { useState, createContext } from "react";

export const ExperienceContext = createContext();

export const ExperienceProvider = (props) => {

    // extreme points
    var todayDate = new Date();
    let startDate = new Date('10/01/2017');
    var timePassed = Math.round((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

    const [experiences, setExperiences] = useState([
        {
            'experience': 'Lives',
            'htmlExperienceID': 'lives',
            'htmlExperienceInfoID': 'info-lives',
            'start_date': new Date('10/01/2017'),
            end_date: new Date('05/04/2018'),
            status: function getStatus() {
                var today = new Date();
                if ( Date.parse(this.end_date) >= Date.parse(today) ) {
                    return 'Ongoing'
                } else {
                    return 'Closed'
                }
            },
            'tags': ['User Research', 'Product Design'],
            daysWorked: function daysWorked() {
                return Math.round((this.end_date.getTime() - this.start_date.getTime()) / (1000 * 3600 * 24))
            },
            timeWorked: function timeWorked() {
                if ( this.daysWorked() < 365 ) {
                    return Math.round(this.daysWorked() / 30) + ' months';
                } else {
                    return Math.round((this.daysWorked() / 30) / 12 * 10) / 10 + ' years';
                }
            },
            timeWorkedPerc: function timeWorkedPerc() {
                return Math.round(this.daysWorked() / timePassed * 100);
            },
            timeShiftPerc: function timeShiftPerc() {                
                return Math.round((Math.round((this.start_date.getTime() - startDate.getTime()) / (1000 * 3600 * 24))) / timePassed * 100)
            }
        },{
            'experience': 'Buddyguide',
            'htmlExperienceID': 'buddyguide',
            'htmlExperienceInfoID': 'info-buddyguide',
            'start_date': new Date('05/04/2018'),
            'end_date': new Date('01/31/2019'),
            status: function getStatus() {
                var today = new Date();
                if ( Date.parse(this.end_date) >= Date.parse(today) ) {
                    return 'Ongoing'
                } else {
                    return 'Closed'
                }
            },
            'tags': ['User Research', 'Product Design', 'Prototyping', 'User Test'],
            daysWorked: function daysWorked() {
                return Math.round((this.end_date.getTime() - this.start_date.getTime()) / (1000 * 3600 * 24))
            },
            timeWorked: function timeWorked() {
                if ( this.daysWorked() < 365 ) {
                    return Math.round(this.daysWorked() / 30) + ' months';
                } else {
                    return Math.round((this.daysWorked() / 30) / 12 * 10) / 10 + ' years';
                }
            },
            timeWorkedPerc: function timeWorkedPerc() {
                return Math.round(this.daysWorked() / timePassed * 100);
            },
            timeShiftPerc: function timeShiftPerc() {                
                return Math.round((Math.round((this.start_date.getTime() - startDate.getTime()) / (1000 * 3600 * 24))) / timePassed * 100)
            }
        },{
            'experience': 'Lophly',
            'htmlExperienceID': 'lophly',
            'htmlExperienceInfoID': 'info-lophly',
            'start_date': new Date('10/01/2018'),
            'end_date': new Date('04/01/2019'),
            status: function getStatus() {
                var today = new Date();
                if ( Date.parse(this.end_date) >= Date.parse(today) ) {
                    return 'Ongoing'
                } else {
                    return 'Closed'
                }
            },
            'tags': [],
            daysWorked: function daysWorked() {
                return Math.round((this.end_date.getTime() - this.start_date.getTime()) / (1000 * 3600 * 24))
            },
            timeWorked: function timeWorked() {
                if ( this.daysWorked() < 365 ) {
                    return Math.round(this.daysWorked() / 30) + ' months';
                } else {
                    return Math.round((this.daysWorked() / 30) / 12 * 10) / 10 + ' years';
                }
            },
            timeWorkedPerc: function timeWorkedPerc() {
                return Math.round(this.daysWorked() / timePassed * 100);
            },
            timeShiftPerc: function timeShiftPerc() {                
                return Math.round((Math.round((this.start_date.getTime() - startDate.getTime()) / (1000 * 3600 * 24))) / timePassed * 100)
            }
        },{
            'experience': 'Kallisto',
            'htmlExperienceID': 'kallisto',
            'htmlExperienceInfoID': 'info-kallisto',
            'start_date': new Date('03/01/2019'),
            'end_date': new Date('02/28/2021'),
            status: function getStatus() {
                var today = new Date();
                if ( Date.parse(this.end_date) >= Date.parse(today) ) {
                    return 'Ongoing'
                } else {
                    return 'Closed'
                }
            },
            'tags': [],
            daysWorked: function daysWorked() {
                return Math.round((this.end_date.getTime() - this.start_date.getTime()) / (1000 * 3600 * 24))
            },
            timeWorked: function timeWorked() {
                if ( this.daysWorked() < 365 ) {
                    return Math.round(this.daysWorked() / 30) + ' months';
                } else {
                    return Math.round((this.daysWorked() / 30) / 12 * 10) / 10 + ' years';
                }
            },
            timeWorkedPerc: function timeWorkedPerc() {
                return Math.round(this.daysWorked() / timePassed * 100);
            },
            timeShiftPerc: function timeShiftPerc() {                
                return Math.round((Math.round((this.start_date.getTime() - startDate.getTime()) / (1000 * 3600 * 24))) / timePassed * 100)
            }
        },{
            'experience': 'Vertical',
            'htmlExperienceID': 'vertical',
            'htmlExperienceInfoID': 'info-vertical',
            'start_date': new Date('05/01/2021'),
            'end_date': new Date(),
            status: function getStatus() {
                var today = new Date();
                if ( Date.parse(this.end_date) >= Date.parse(today) ) {
                    return 'Ongoing'
                } else {
                    return 'Closed'
                }
            },
            'project_type_tags': [
                {
                    icon: '',
                    label: 'Team member'
                }
            ],
            'my_roles_tags': [
                {
                    icon: '',
                    label: 'Head of design'
                },{
                    icon: '',
                    label: 'Product designer'
                }
            ],
            'my_activities_tags': [
                {
                    icon: '',
                    label: 'Low-fi wireframes'
                },{
                    icon: '',
                    label: 'Mi-fi wireframes'
                },{
                    icon: '',
                    label: 'High-fi wireframes'
                },{
                    icon: '',
                    label: 'Production design'
                },{
                    icon: '',
                    label: 'Prototyping'
                },{
                    icon: '',
                    label: 'User tests'
                },{
                    icon: '',
                    label: 'Design system'
                },{
                    icon: '',
                    label: 'Feature testing'
                },{
                    icon: '',
                    label: 'QA'
                }
            ],
            daysWorked: function daysWorked() {
                return Math.round((this.end_date.getTime() - this.start_date.getTime()) / (1000 * 3600 * 24))
            },
            timeWorked: function timeWorked() {
                if ( this.daysWorked() < 365 ) {
                    return Math.round(this.daysWorked() / 30) + ' months';
                } else {
                    return Math.round((this.daysWorked() / 30) / 12 * 10) / 10 + ' years';
                }
            },
            timeWorkedPerc: function timeWorkedPerc() {
                return Math.round(this.daysWorked() / timePassed * 100);
            },
            timeShiftPerc: function timeShiftPerc() {                
                return Math.round((Math.round((this.start_date.getTime() - startDate.getTime()) / (1000 * 3600 * 24))) / timePassed * 100)
            }
        },{
            'experience': 'Midly',
            'htmlExperienceID': 'midly',
            'htmlExperienceInfoID': 'info-midly',
            'start_date': new Date('01/01/2020'),
            'end_date': new Date(),
            status: function getStatus() {
                var today = new Date();
                if ( Date.parse(this.end_date) >= Date.parse(today) ) {
                    return 'Ongoing'
                } else {
                    return 'Closed'
                }
            },
            'project_type_tags': [
                {
                    icon: '',
                    label: 'Founded startup'
                }
            ],
            'my_roles_tags': [
                {
                    icon: '',
                    label: 'Co-founder'
                },{
                    icon: '',
                    label: 'Product designer'
                },{
                    icon: '',
                    label: 'Product manager'
                },{
                    icon: '',
                    label: 'Product owner'
                },{
                    icon: '',
                    label: 'Product team lead'
                }
            ],
            'my_activities_tags': [
                {
                    icon: '',
                    label: 'Low-fi wireframes'
                },{
                    icon: '',
                    label: 'Mi-fi wireframes'
                },{
                    icon: '',
                    label: 'High-fi wireframes'
                },{
                    icon: '',
                    label: 'Production design'
                },{
                    icon: '',
                    label: 'Prototyping'
                },{
                    icon: '',
                    label: 'User tests'
                },{
                    icon: '',
                    label: 'Design system'
                },{
                    icon: '',
                    label: 'Product roadmap'
                },{
                    icon: '',
                    label: 'Sprint planning'
                },{
                    icon: '',
                    label: 'Sprint review'
                },{
                    icon: '',
                    label: 'Feature testing'
                },{
                    icon: '',
                    label: 'QA'
                },{
                    icon: '',
                    label: 'Database data analysis'
                },{
                    icon: '',
                    label: 'Frontend development'
                }
            ],
            daysWorked: function daysWorked() {
                return Math.round((this.end_date.getTime() - this.start_date.getTime()) / (1000 * 3600 * 24))
            },
            timeWorked: function timeWorked() {
                if ( this.daysWorked() < 365 ) {
                    return Math.round(this.daysWorked() / 30) + ' months';
                } else {
                    return Math.round((this.daysWorked() / 30) / 12 * 10) / 10 + ' years';
                }
            },
            timeWorkedPerc: function timeWorkedPerc() {
                return Math.round(this.daysWorked() / timePassed * 100);
            },
            timeShiftPerc: function timeShiftPerc() {                
                return Math.round((Math.round((this.start_date.getTime() - startDate.getTime()) / (1000 * 3600 * 24))) / timePassed * 100)
            }
        }
    ]);

    return (
        <ExperienceContext.Provider value={[experiences, setExperiences]}>
            {props.children}
        </ExperienceContext.Provider>
    );
}