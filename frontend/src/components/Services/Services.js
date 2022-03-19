import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import { Servicesdata } from './Servicesdata';
const Services = () => {
    return (
        <div className="main">
            <div className="main-heading">
                Services
                <p>We at Ultra provide the best class services for our customer</p>
            </div>
            <div className="myservices">
            <div className="contents">
            {Servicesdata.map((service,index) => {
                return ( 
                    <div className="main_displayy" key={index}>
                    <div className="card_component">
                    <div className="services_data">
                        <service.icon/>
                    </div>
                    <div className="service_name">{service.services}</div>
                    <div className="card_content">
                        {service.description}
                    </div>
                    <button type="submit">{service.text}</button>
                    </div> 
                    </div> 
                )
            })}
            </div>
            </div>
            
        </div>
    )
}

export default Services
