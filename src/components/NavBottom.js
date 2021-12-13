import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ServiceContext } from '../context/ServiceContext'

export const NavBottom = () => {
    const { setSearch } = useContext(ServiceContext)
    

    function handleClick() {
        setSearch([])
    }

    return (
        <React.Fragment>
            <div className="container">
                <ul id="bottom-nav" className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/who-we-are" onClick={handleClick}>WHO WE ARE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/what-we-do" onClick={handleClick}>WHAT WE DO</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleClick}>NEWS & EVENTS</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/where-we-work" onClick={handleClick}>WHERE WE WORK</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us" onClick={handleClick}>CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
