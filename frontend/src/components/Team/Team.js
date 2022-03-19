import React from 'react'
import './Team.css'
import { FaMagento } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Teamdata } from './Teamdata';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div className="mainn">
            <div className="logo">
                <FaMagento/>
                ULTRA
            </div>
            <div className="txt">
                We are glad to have you here.
            </div>
            <div className="team_contents">
                <div className="team_data">
                    {
                        Teamdata.map((team) => {
                            return (
                                <div className="main_display">
                                <div className="data_component">
                                    <div className="member_icon">
                                        <CgProfile/>
                                    </div>
                                    <img src={team.image}  />
                                    <div className="member_name">
                                        {team.name}
                                    </div>
                                    <div className="member_description">
                                        {team.description}
                                    </div>
                                    <Link to='/'>
                                    <div className="data_component_more">
                                        More
                                    </div>
                                    </Link>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Team 
