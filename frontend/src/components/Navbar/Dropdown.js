import React from 'react'
import './Dropdown.css'

const Dropdown = () => {
    return (
        <div className="dropdown">
            <div className="dropdown_items">
                <a href='/'><span className="items">Software Consultancy</span></a>
                <a href="/"><span className="items">Mobility Services</span></a>
                <a href="/applicationservices"><span className="items">Application Services</span></a>
                <a href="/entries"><span className="items">Maintenance & Support</span></a>
                <a href="/teamextension"><span className="items">Team Extension</span></a>
                <a href="/software"><span className="items">Software Development</span></a>
            </div>
        </div>
    )
}

export default Dropdown
