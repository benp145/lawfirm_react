
import { Link } from 'react-router-dom'
import rosemary from '../images/content-navlink-panek_rosemary.jpg'
import attorneys from '../images/content-01-attorneys.jpg'

import React, { Component, useContext } from 'react'

export default class Attorneys extends Component {
    
    render() {
        return (
            <React.Fragment>
             <div className="row row-margin-top">
                <div className="col-3">

                    <div className="myBox-a container-fluid">
                        <h4>WHO WE ARE</h4>
                        <hr color="white" />
                        <ul id="sidebar-list" className="list-group">
                            <li className="sidebar-list-item">
                                <p><Link to="/who-we-are">Welcome</Link></p>
                            </li>
                            <li className="sidebar-list-item">
                                <p><Link to="/who-we-are/attorneys">Attorneys</Link></p>
                            </li>
                            <li className="sidebar-list-item">
                                <p><a href="#">Staff</a></p>
                            </li>
                            <li className="sidebar-list-item">
                                <p><a href="#">Reputation</a></p>
                            </li>
                            <li className="sidebar-list-item">
                                <p><a href="#">History</a></p>
                            </li>
                            <li className="sidebar-list-item">
                                <p><img src={rosemary} alt="Lady" /></p>
                            </li>
                            <li className="sidebar-list-item"><b><Link to="/contact-us">Contact Us</Link></b></li>
                            <li className="sidebar-list-item">
                                <p>For general inquiries and questions...</p>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="col-9">
                    <img src={attorneys} alt="Chairs" />
                    
                        <div className="row row-margin-top">
                            <div className="col-6">
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                                <div className="portrait">
                                    <img src="https://via.placeholder.com/110" alt="Lawyer" />
                                    <b>John P. Smith</b>
                                    <p>Job Title</p>
                                    <p>800.800.8000</p>
                                    <u>
                                        <p id="special-p"><a href="#">myemail@myemail.com</a></p>
                                        <a href="#">more...</a>
                                    </u>
                                </div>
                            </div>
                        </div>



                    
                </div>

            </div>


        </React.Fragment>
        )
    }
}
